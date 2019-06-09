import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HardcodedAuthenticationService {
  constructor() {}
  authenticate(username, password) {
    if (username == "asdf" && password == "123456") {
      return true;
    }
    return false;
  }
}
