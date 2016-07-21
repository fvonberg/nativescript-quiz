import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Page} from "ui/page";
import {Router} from "@angular/router";
import {Label} from "ui/label";
import {Button} from "ui/button";
import {Animation} from "ui/animation";
import {AnimationDefinition} from "ui/animation";

@Component({
    moduleId: module.id,
    selector: "home",
    templateUrl: "home.html",
    styleUrls: ["home-common.css", "home.css"]
})
export class HomeComponent implements OnInit {
    @ViewChild("label") loginLabel: ElementRef;
    @ViewChild("button") loginButton: ElementRef;

    constructor(private page: Page, private _router: Router) {}

    public ngOnInit() {
        this.page.actionBarHidden = true;
    }

    public startGame() {
        let labelElement = <Label>this.loginLabel.nativeElement;
        let loginButton = <Button>this.loginButton.nativeElement;
        let animations: Array<AnimationDefinition> = [];

        animations.push({target: labelElement, translate: {x: 400, y: 0}, duration: 1000});
        animations.push({target: loginButton, translate: {x: -400, y: 0}, duration: 1000});

        new Animation(animations, false).play().then(() => {
            this.navigate();
        });
    }

    private navigate() {
        this._router.navigate(["/game"]);
    }
}