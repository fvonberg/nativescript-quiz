import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {

    constructor(public page: Page) {}

    public ngOnInit() {
        this.page.actionBarHidden = true;
    }

    public startGame() {
        console.log("start game");
    }
}
