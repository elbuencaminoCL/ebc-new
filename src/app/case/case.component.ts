import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticDataService } from './../static-data.service'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Title }     from '@angular/platform-browser';
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

  constructor( private staticDataService: StaticDataService, private route: ActivatedRoute, config: NgbCarouselConfig, private titleService: Title ) {

	this.slug = route.snapshot.params['id'];
	this.getCase( this.slug );

	config.interval = 10000;
	config.wrap = false;
	config.keyboard = false;

  }

  ngOnInit() {
    this.titleService.setTitle( 'Caso' );
  }

  getCase( slug ) {
  	this.staticDataService.getData( 'cases/' + slug + '.json' )
		.subscribe(
			data => {
				this.case = data;
			},
			err => console.error( err ),
			() => console.log( 'done detail case' )
		);
  }


  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
