import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { Platform } from "@ionic/angular";
const { SplashScreen } = Plugins;
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    SplashScreen.hide();
  }
}
