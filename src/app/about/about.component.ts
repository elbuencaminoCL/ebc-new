import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StaticDataService } from './../static-data.service';

declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.styl']
})

export class AboutComponent implements OnInit {

  public members;
	public methodologies;

  constructor( private staticDataService: StaticDataService ) { }

  ngOnInit() {
    this.staticDataService.getData( 'about.json' )
      .subscribe(
        data => {
          this.members = data.members;
          this.methodologies = data.methodologies;
        },
        err => console.error( err ),
        () => console.log( 'done about us' )
      );
  }


  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
