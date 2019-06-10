import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService } from "../service/data/welcome-data.service";
// import { AppComponent } from "../app.component";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  message = "some welcome message";
  name = "";
  welcomeMessageFromService: string;
  // dependency injection
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit() {
    console.log(this.message);
    // console.log(this.route.snapshot.params["name"]);
    this.name = this.route.snapshot.params["name"];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    // async
    this.service
      .executeHelloWorldBeanService()
      .subscribe(response => this.handleSuccessfulResponse(response));
    console.log("last line of get welcome message");
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    // console.log(response.message);
  }
}
