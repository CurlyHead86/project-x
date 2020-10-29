import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private token: TokenService) {}

  login(username: string, password: string) {
    return this.http.post(
      "http://localhost/wordpress/wp-json/jwt-auth/v1/token",
      { username, password }
    );
  }

  getToken() {
    this.token = new TokenService();
    this.token.setToken(this.login("curlyhead86", "mollie")["data"]);
  }
}
