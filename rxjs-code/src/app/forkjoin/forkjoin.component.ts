import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit(): void {
    const posts$ = this.service.getPosts();

    const comments$ = this.service.getComments();

    const forkjoin$ = forkJoin([posts$,comments$]);

    forkjoin$.subscribe(data=> console.log('data',data));


  }

}
