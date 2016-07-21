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

    constructor(private page: Page, private questionService: QuestionService, private _router: Router) { }

    ngOnInit() {

    }

    getAnswerClasses(answerNumber: number) {
    }

    setSelectedAnswer(answerNumber: number) {
    }

    private nextQuestion() {

    }
}