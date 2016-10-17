import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.styl']
})
export class ServicesComponent implements OnInit {

  public menus;

  constructor( private http:Http ) { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.http.get( './app/_data/home.json' )
      .map((res:Response) => res.json())
      .subscribe(
        data => {
          this.menus = data.menu;
        },
        err => console.error( err ),
        () => console.log( 'done' )
      );
  }
}
