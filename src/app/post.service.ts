import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient, private header: HttpHeaders) {}

  getPosts() {
    //return this.http.get("http://localhost/wordpress/wp-json/wp/v2/posts");
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
