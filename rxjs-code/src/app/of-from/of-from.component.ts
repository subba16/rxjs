import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, from } from "rxjs";
@Component({
  selector: "app-of-from",
  templateUrl: "./of-from.component.html",
  styleUrls: ["./of-from.component.css"]
})
export class OfFromComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public readonly title = "Angular rxjs";

  ngOnInit(): void { 
    const person: Person = {
      name: "subba" 
    };
    //to

    const person$: Observable<Person> = of(person);
    person$.subscribe(data => console.log(data));

    //from

    const personPromise: Promise<Person> = Promise.resolve(person);
    const personobs: Observable<Person> = from(personPromise);

    personobs.subscribe(data => console.log(data));
  }
}
