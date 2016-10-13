import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  public carousel;
  public menus;
  public slides;

  constructor( private http: Http, config: NgbCarouselConfig ) {
    config.interval = 0;
  }

  ngOnInit() {

    this.getData();

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

  getData() {
    this.http.get( './app/_data/home.json' )
      .map((res:Response) => res.json())
      .subscribe(
        data => {
          this.menus = data.menu;
          this.slides = data.slides;
        },
        err => console.error( err ),
        () => console.log( 'done' )
      );
  }

}
