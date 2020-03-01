import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from "rxjs";
import {map,tap} from 'rxjs/operators'
@Component({
  selector: 'app-map-tap',
  templateUrl: './map-tap.component.html',
  styleUrls: ['./map-tap.component.css']
})
export class MapTapComponent implements OnInit {
  public readonly title = "Angular rxjs";

  constructor() { }

  ngOnInit(): void {

    const source = of('david');

    source
    .pipe(
      map(name=> name.toUpperCase())
    )
    .subscribe(data => console.log(data));

    // tap does not change source data
    source
    .pipe(
      tap(name=> name.toUpperCase())
    )
    .subscribe(data => console.log(data));




  }

}
