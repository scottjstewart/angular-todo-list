import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "Scott";
  title: string = "IISD Home Workouts";

  constructor() {
    console.log("open");
    this.changeName("Hannah");
  }

  changeName(name: string): void {
    this.name = name;
  }
}
