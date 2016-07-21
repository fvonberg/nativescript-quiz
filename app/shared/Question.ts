export class Question {

    constructor(private _id:number, private _question:string,
                private _answer1:string, private _answer2:string,
                private _answer3:string, private _answer4:string,
                private _correctAnswer:number) {
    }

    get id():number {
        return this._id;
    }

    get question():string {
        return this._question;
    }

    get answer1():string {
        return this._answer1;
    }

    get answer2():string {
        return this._answer2;
    }

    get answer3():string {
        return this._answer3;
    }

    get answer4():string {
        return this._answer4;
    }

    get correctAnswer():number {
        return this._correctAnswer;
    }
}