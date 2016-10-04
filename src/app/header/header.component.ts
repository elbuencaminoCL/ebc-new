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

		let $navToggle = $( '#navToggle' )
		,	$overlay = $( '#overlay' )
		,	$overlayList = $overlay.find( 'li' )
		,	$element = $( '#navbar' );

		$navToggle.on( 'click', function() {
			$( this ).toggleClass( 'active' );
			$overlay.toggleClass( 'open' );
		});


		$overlayList.on( 'click', function () {
			$( this ).toggleClass( 'active' );
			$navToggle.toggleClass( 'active' );
			$overlay.toggleClass( 'open' );			
		})

		$( window ).scroll( function () {
			if( $(this).scrollTop() > 60 ) {
				$element.addClass( 'sticky' );
			} else {
				$element.removeClass( 'sticky' );				
			}
		});



	}

}
