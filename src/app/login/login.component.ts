import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "asdf";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  handleLogin() {
    // console.log(this.username);
    if (this.username === "asdf" && this.password === "123456") {
      // Redirect to Welcome Page
      this.router.navigate(["welcome"]);
      this.invalidLogin = false;
    } else this.invalidLogin = true;
  }
}
