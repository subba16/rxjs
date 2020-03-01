import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable,Subscription } from "rxjs";
import { share } from 'rxjs/operators';

@Component({
  selector: "app-share",
  templateUrl: "./share.component.html",
  styleUrls: ["./share.component.css"]
})
export class ShareComponent implements OnInit {
  private loading: boolean;
  constructor(private http: HttpClient) {}
  busy: Subscription;
  ngOnInit(): void {
    const request = this.getPosts();
    this.setLoadingSpinner(request);

    request.subscribe(data => this.print(data));
  }
  print(data: any[]): void {
    console.log(data[0].title);
  }
  setLoadingSpinner(observable: Observable<any>) {
    this.loading = true;
    this.busy=observable.subscribe(() => (this.loading = false));
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    .pipe(
      share()
    );
  }
}
