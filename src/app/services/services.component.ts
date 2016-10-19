import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StaticDataService } from './../static-data.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.styl']
})
export class ServicesComponent implements OnInit {

  public menus;
  public services;

  constructor( private staticDataService:StaticDataService, public router: Router ) { }

  ngOnInit() {

    console.log( this.router );


    this.staticDataService.getData( 'services.json' )
      .subscribe(
        data => {
          this.menus = data.menu;
          this.services = data.services;
        },
        err => console.error( err ),
        () => console.log( 'done' )
      );

     let $sidebar = $( '#sidebar' );
     let $services = $( '#services' );
     const SCROLL_TOP = 500

     $( window ).scroll( function () {
       if( $(this).scrollTop() > SCROLL_TOP ) {
         $sidebar.addClass( 'sticky' );
         $services.addClass( 'sticky' );
       } else {
         $sidebar.removeClass( 'sticky' );
         $services.removeClass( 'sticky' );
       }
     });

  }

  ngAfterViewInit() {
      window.scrollTo(0, 0);
      $('[data-spy="scroll"]').each(function () {
       let $spy = $(this).scrollspy('refresh')
      })

      $('body').scrollspy({
       target: '#sidebar',
       offset: 120
      })

  }



}
