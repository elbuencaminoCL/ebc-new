import { Component, OnInit, AfterViewInit } from '@angular/core';
	
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {



	constructor( private location: Location ) {}

	isActive( path ) {
		return this.location.path().indexOf(path) > -1;
	}

	ngOnInit() {}

	ngAfterViewInit() {

		let $navToggle = $('.navToggle');

		$navToggle.click(function() {
			$(this).toggleClass('active');
			$('.overlay').toggleClass('open');
		});

		let $element = $( '.navbar' );

		$( window ).scroll( function () {
			if( $(this).scrollTop() > 60 ) {
				$element.addClass( 'sticky' );
			} else {
				$element.removeClass( 'sticky' );				
			}
		});

	}

}
