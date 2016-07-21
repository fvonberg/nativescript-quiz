import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {AnimationCurve} from "ui/enums";
import {Observable} from "rxjs"
import {QuestionService} from "../../shared/QuestionService";
import * as CameraModule from "camera";
import {Image} from "ui/image";

@Component({
    moduleId: module.id,
    selector: "result",
    providers: [QuestionService],
    templateUrl: "result.html",
    styleUrls: ["result-common.css"],
    // @state in template
    // animations: [
    //     trigger('state', [
    //         state('in', translage({ x: 0, y: 250 })),
    //         transition('void => *', [ animate('600ms spring') ]),
    //     ])
    // ]
})
export class ResultComponent implements OnInit {

    @ViewChild("container") starContainer: ElementRef;
    @ViewChild("image") imageContainer: ElementRef;

    scoreLabel: string = "";
    showPicture: boolean = false;

    constructor(private page: Page, private questionService: QuestionService, private _router: Router, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this.page.actionBarHidden = true;

        this._route.params.subscribe(params => {
            let correctAnswer = +params["correctAnswers"];
            let percent = (correctAnswer / this.questionService.getQuestionCount()) * 100;
            this.scoreLabel = percent + "% Richtig";
        });

        // Hack until ng-animate is working
        Observable.interval(100).take(1).subscribe(x => {
            this.startAnimation();
        });
    }

    startAnimation() {
        let animateStarContainer = <View>this.starContainer.nativeElement;
        animateStarContainer.animate({
            translate: {x: 0, y: 250},
            duration: 1500,
            curve: AnimationCurve.spring
        });
    }

    capturePicture() {
        if(this.showPicture) {
            this.backToHome();
        } else {
            CameraModule.takePicture({width: 240, height: 480, keepAspectRatio: true}).then(picture => {
                let image = <Image>this.imageContainer.nativeElement;
                image.imageSource = picture;
                this.showPicture = true;
            });
        }
    }

    private backToHome() {
        this._router.navigate(["/"]);
    }
}