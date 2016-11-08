import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StaticDataService } from './../static-data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Title }     from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  public menus;
  public slides;

  constructor( private staticDataService: StaticDataService, config: NgbCarouselConfig, private titleService: Title ) {
    config.interval = 0;
  }

  ngOnInit() {
    this.titleService.setTitle( 'Estudio especializado en UX' );

    this.staticDataService.getData( 'home.json' )
      .subscribe(
        data => {
          this.menus = data.menu;
          this.slides = data.slides;
        },
        err => console.error( err ),
        () => console.log( 'done' )
      );


  	let left = -52
  	,	top = 36
  	,	topAppend = 36
  	,	right = -52;

  	for (let i = 0; i < 6; ++i) {
  		$( '.do__heading' ).prepend( '<div class="do__box do__box-prepend" style="left:'+ left +'px; top: ' + top + 'px"></div>' );
  		left -= 123;
  		top -= 123;
  	}


  	for (let i = 0; i < 6; ++i) {
  		$( '.do__heading' ).append( '<div class="do__box do__box-append" style="right:'+ right +'px; top: ' + topAppend + 'px"></div>' );
  		right -= 123;
  		topAppend -= 123;
  	}

  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }


}
