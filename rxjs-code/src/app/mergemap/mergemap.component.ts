import { Component, OnInit } from '@angular/core';
import { of, Observable, concat } from 'rxjs';
import { map,mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const carColor$ = of({color:'gray'});
    const carDriver$ = of({driver:'subba'});


    const car$: Observable<Car> = carColor$.pipe(
    mergeMap(color=> {
      return carDriver$.pipe(
        map(driver =>{
            const car: Car = {
              driver:driver,
              color: color
            };
            return car;
        })
      )
    })
    )

    car$.subscribe(data => console.log('car',data));

    const combine$ = concat(carColor$,carDriver$);

    combine$.subscribe(data=> console.log(data));


    
  }

}
