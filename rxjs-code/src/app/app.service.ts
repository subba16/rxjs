import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http: HttpClient) {}
  busy: Subscription;

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getPostTitles(title: string): Observable<Post[]> {
    return this.http
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .pipe(
      map(data => data.filter(post => post.title.contains(title))));
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      "https://jsonplaceholder.typicode.com/comments"
    );
  }
}
