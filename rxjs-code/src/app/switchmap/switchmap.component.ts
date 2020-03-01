import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit {

  constructor(private service:AppService) { }

  ngOnInit(): void {
    const posts$ = this.service.getPosts();
    const comment$ = this.service.getComments();

    const combined$ = posts$
    .pipe(
      switchMap(posts => {
        return comment$;
      })
    );

    combined$.subscribe(data => console.log('comments',data));

  }

}
