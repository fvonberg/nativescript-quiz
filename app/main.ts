// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {APP_ROUTES_PROVIDERS} from "./app.route";

nativeScriptBootstrap(AppComponent, [APP_ROUTES_PROVIDERS]);