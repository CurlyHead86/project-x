import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    this.authorize();
    return this.http.get("http://localhost/wordpress/wp-json/wp/v2/posts");
  }

  authorize() {
    this.http
      .post("http://localhost/wordpress/wp-json/jwt-auth/v1/token", {
        username: "curlyhead86",
        password: "mollie"
      })
      .subscribe(data => {
        console.log(data);
        //if (data['token']) { // if token is returned

        //this.token = data['token'];
        //this.tokenChange.emit(this.token);
      });
  }
}
