import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StaticDataService } from './../static-data.service';

declare var $:any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.styl']
})
export class ServicesComponent implements OnInit {

  public features;
  public menus;
  public services;
  public works;

  constructor( private staticDataService:StaticDataService ) { }

  ngOnInit() {
    this.staticDataService.getData( 'services.json' )
      .subscribe(
        data => {
          this.menus = data.menu;
          this.services = data.services;
          this.features = data.services.features;
          this.works = data.services.works;
        },
        err => console.error( err ),
        () => console.log( 'done' )
      );

     let $sidebar = $( '#sidebar' );
     const SCROLL_TOP = 500

     $( window ).scroll( function () {
       if( $(this).scrollTop() > SCROLL_TOP ) {
         $sidebar.addClass( 'sticky' );
       } else {
         $sidebar.removeClass( 'sticky' );
       }
     });

  }

  ngAfterViewInit() {
     $('[data-spy="scroll"]').each(function () {
       let $spy = $(this).scrollspy('refresh')
     })

     $('body').scrollspy({ target: '#sidebar' })

  }



}
