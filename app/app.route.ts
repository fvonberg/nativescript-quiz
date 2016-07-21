import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {GameComponent} from "./pages/game/game.component";
import {ResultComponent} from "./pages/result/result.component";

export const routes: RouterConfig = [
    { path: "", component: HomeComponent },
    { path: "game", component: GameComponent },
    { path: "result/:correctAnswers", component: ResultComponent }
];

export const APP_ROUTES_PROVIDERS = [
    nsProvideRouter(routes, {})
];