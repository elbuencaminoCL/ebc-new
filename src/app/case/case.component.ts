import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
declare var $: any;

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.styl']
})
export class CaseComponent implements OnInit {

	public case;
	public slug;

  constructor( private http: Http, private route: ActivatedRoute ) {
	  	
			this.slug = route.snapshot.params['id'];
	  	this.getCase( this.slug );

  }

  ngOnInit() {

  }

  getCase( slug ) {
  	this.http.get( './app/_data/cases/' + slug + '.json' )
  		.map((res:Response) => res.json())
		.subscribe(
			data => {
				console.log( data );
				this.case = data;
			},
			err => console.error( err ),
			() => console.log( 'done' )
		);
  }

}
