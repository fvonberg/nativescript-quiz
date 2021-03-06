import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Page} from "ui/page";
import {QuestionService} from "../../shared/QuestionService";
import {Question} from "../../shared/Question";
import {Observable} from "rxjs";

@Component({
    moduleId: module.id,
    selector: "game",
    providers: [QuestionService],
    templateUrl: "game.html",
    styleUrls: ["game.css"]
})
export class GameComponent implements OnInit {

    actualQuestion: Question = null;
    private selectedAnswer: number = 0;
    answerSelectedByUser: boolean = false;
    countdown: number = 5;
    showProgress: boolean = false;

    constructor(private page: Page, private questionService: QuestionService, private _router: Router) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.questionService.startNewGame();
        this.actualQuestion = this.questionService.getNextQuestion();
    }

    getAnswerClasses(answerNumber: number) {
        if(this.answerSelectedByUser == true) {
            if(answerNumber == this.actualQuestion.correctAnswer) {
                return {unselected: false, wrong: false, correct: true};
            } else if (answerNumber == this.selectedAnswer) {
                return {unselected: false, wrong: true, correct: false};
            }
            return {unselected: true, wrong: false, correct: false};
        } else {
            return {unselected: true, wrong: false, correct: false};
        }
    }

    setSelectedAnswer(answerNumber: number) {
        if(!this.answerSelectedByUser) {
            this.selectedAnswer = answerNumber;
            this.answerSelectedByUser = true;
            this.showProgress = true;
            Observable.interval(1000).take(5).subscribe(x => {
                this.countdown--;
                if(this.countdown === 0) {
                    this.nextQuestion();
                }
            });
        }
    }

    private nextQuestion() {

        this.showProgress = false;
        this.countdown = 5;

        if(this.selectedAnswer == this.actualQuestion.correctAnswer) {
            this.questionService.incrementCorrectAnswers();
        }

        if(this.questionService.isThereANextQuestion()) {
            this.answerSelectedByUser = false;
            this.actualQuestion = this.questionService.getNextQuestion();
        } else {
            this._router.navigate(["/result", this.questionService.getCorrectAnswers()]);
        }

    }
}