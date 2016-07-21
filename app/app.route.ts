import {RouterConfig} from "@angular/router";
import {HomeComponent} from "../../Quiz/app/pages/home/home.component";
import {nsProvideRouter} from "nativescript-angular/router";
import {GameComponent} from "../../Quiz/app/pages/game/game.component";
import {ResultComponent} from "../../Quiz/app/pages/result/result.component";

export const routes: RouterConfig = [
    { path: "", component: HomeComponent },
    { path: "game", component: GameComponent },
    { path: "result/:correctAnswers", component: ResultComponent }
];

export const APP_ROUTES_PROVIDERS = [
    nsProvideRouter(routes, {})
];