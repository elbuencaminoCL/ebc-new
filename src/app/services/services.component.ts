import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StaticDataService } from './../static-data.service';
import { Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';
declare var $:any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.styl']
})
export class ServicesComponent implements OnInit {

  public menus;
  public services;

  constructor( private staticDataService:StaticDataService, public router: Router, private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( 'Servicios' );

    this.staticDataService.getData( 'services.json' )
      .subscribe(
        data => {
          this.menus = data.menu;
          this.services = data.services;
        },
        err => console.error( err ),
        () => console.log( 'done' )
      );

  }

  ngAfterViewInit() {
      window.scrollTo(0, 0);
  }



}
