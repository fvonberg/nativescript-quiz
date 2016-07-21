import { Injectable } from '@angular/core';
import { Question } from "./Question";
import { Subject } from "rxjs/Rx";

@Injectable()
export class QuestionService {

    private QUESTION_POOL: Array<Question> = [
        new Question(1, "Wer hat die erste Rechenmaschine entworfen?", "Albert Einstein", "Konrad Zuse", "Wilhelm Schickard" ,"Ada Lovelace", 3),
        new Question(2, "Wofür steht die Abkürzung HTML?", "Hyper Tablet Makup Language", "Hyper Text Markup Language", "Hyper Text Mobile Language", "Heroic Text Markup Language", 2),
    ];

    private actualGame: Array<Question> = [];
    private correctAnswers: number = 0;

    constructor() { }

    startNewGame(): void {
        this.actualGame = this.QUESTION_POOL.sort(function() { return 0.5 - Math.random() });
        this.correctAnswers = 0;
    }

    isThereANextQuestion(): boolean {
        return this.actualGame.length > 0;
    }

    getNextQuestion(): Question {
        return this.actualGame.pop();
    }

    incrementCorrectAnswers(): void {
        this.correctAnswers++;
    }

    getQuestionCount() {
        return 2;
    }

    getCorrectAnswers(): number {
        return this.correctAnswers;
    }

}

