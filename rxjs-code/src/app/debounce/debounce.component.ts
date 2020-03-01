import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Observable } from "rxjs";
import { switchMap,map,filter, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: "app-debounce",
  templateUrl: "./debounce.component.html",
  styleUrls: ["./debounce.component.css"]
})
export class DebounceComponent implements OnInit {
  constructor(private service: AppService,private http: HttpClient) {
    this.search = this.search.bind(this);
  }

  searchTerm:string;
  ngOnInit(): void {}
   
  search(text$: Observable<string>): Observable<string[]> {
    return text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchTerm => {
        console.log('searchTerm',searchTerm);
        return this.getPostTitles(searchTerm);
      })
    );
  }

  getPostTitles(title: string): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .pipe(
         
      map(data => data.filter(post => {
        console.log('post',post);
        console.log('post',post.title);
       return post.title.includes(title)}
       ).map(data => data.title)) 
       
       );
  }

}
