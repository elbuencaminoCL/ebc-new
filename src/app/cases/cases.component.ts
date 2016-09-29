import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

declare var $: any;

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.styl']
})
export class CasesComponent implements OnInit {

  public cases;

  constructor( private http: Http ) {
  }

  ngOnInit() {
    this.getCases();
  }
    
  getCases() {
    this.http.get('./app/_data/cases.json') 
      .map((res:Response) => res.json())
      .subscribe(
        data => {
        	console.log( data );
        },
        err => console.error(err),
        () => console.log('done')
      );
  }

}