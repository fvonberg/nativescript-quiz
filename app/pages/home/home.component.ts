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
    constructor(private page: Page) {}

    public ngOnInit() {
        this.page.actionBarHidden = true;
    }

    public startGame() {
        console.log("start game");
    }
}