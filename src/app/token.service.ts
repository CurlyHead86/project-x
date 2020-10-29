import { Injectable } from "@angular/core";

@Injectable()
export class TokenService {
  jwtToken: string;
  decodedToken: { [key: string]: string };

  constructor() {}

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }
}
