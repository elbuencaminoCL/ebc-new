import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StaticDataService } from './../static-data.service';
import { Title }     from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.styl']
})

export class CasesComponent implements OnInit {

  public cases;

  constructor( private staticDataService: StaticDataService, private titleService: Title ) {
  }

  ngOnInit() {
    this.titleService.setTitle( 'Casos de éxito' );
    this.staticDataService.getData( 'cases.json' )
      .subscribe(
        data => {
          this.cases = data.cases;
        },
        err => console.error(err),
        () => console.log('done cases')
      );
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}