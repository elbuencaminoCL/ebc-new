import { Component, OnInit } from '@angular/core';
import { StaticDataService } from './../static-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.styl']
})
export class ServicesComponent implements OnInit {

  public menus;

  constructor( private staticDataService:StaticDataService ) { }

  ngOnInit() {
    this.staticDataService.getData( 'home.json' )
      .subscribe(
        data => {
          this.menus = data.menu;
        },
        err => console.error( err ),
        () => console.log( 'done' )
      );
  }



}
