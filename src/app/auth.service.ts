import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private token: TokenService) {}

  getToken() {
    return this.http.post(
      "http://localhost/wordpress/wp-json/jwt-auth/v1/token",
      {
        username: "curlyhead86",
        password: "mollie"
      }
    );
  }

  authorize() {
    this.http
      .post("http://localhost/wordpress/wp-json/jwt-auth/v1/token", {
        username: "curlyhead86",
        password: "mollie"
      })
      .subscribe(
        data => {
          console.log(data);
          if (data["token"]) {
          }
        },
        error => {
          console.log("Access denied");
        }
      );
  }
}
