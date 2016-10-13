import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.styl']
})

export class AboutComponent implements OnInit {

	public members;

  constructor( private http: Http ) { }

  ngOnInit() {
  	this.getMembers();
  }

  getMembers() {
  	this.http.get( './app/_data/about.json' )
  		.map((res:Response) => res.json())
  		.subscribe(
  			data => {
  				this.members = data.members;
  			},
  			err => console.error( err ),
  			() => console.log( 'done' )
  		);
  }

}
