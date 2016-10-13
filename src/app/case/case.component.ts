import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.styl'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class CaseComponent implements OnInit {

	public case;
	public slug;
	public carousel;

  constructor( private http: Http, private route: ActivatedRoute, config: NgbCarouselConfig ) {

	this.slug = route.snapshot.params['id'];
	this.getCase( this.slug );

	config.interval = 10000;
	config.wrap = false;
	config.keyboard = false;

  }

  ngOnInit() {

  }

  getCase( slug ) {
  	this.http.get( './app/_data/cases/' + slug + '.json' )
  		.map((res:Response) => res.json())
		.subscribe(
			data => {
				this.case = data;
			},
			err => console.error( err ),
			() => console.log( 'done' )
		);
  }

}
