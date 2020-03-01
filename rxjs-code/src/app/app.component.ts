import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // <app-of-from></app-of-from>
  template:     
  `
  
<app-map-tap></app-map-tap>


  ` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-code';
}
