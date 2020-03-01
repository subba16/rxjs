import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // <app-of-from></app-of-from>
// <app-map-tap></app-map-tap>
// <app-share></app-share>
//<app-switchmap></app-switchmap>
// <app-debounce> </app-debounce>
  template:     
  `
  <app-mergemap></app-mergemap>


  ` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-code';
}
