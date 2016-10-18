import { Component, OnInit } from '@angular/core';
import { StaticDataService } from './../static-data.service';

declare var $: any;

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.styl']
})

export class CasesComponent implements OnInit {

  public cases;

  constructor( private staticDataService: StaticDataService ) {
  }

  ngOnInit() {
    this.staticDataService.getData( 'cases.json' )
      .subscribe(
        data => {
          this.cases = data.cases;
        },
        err => console.error(err),
        () => console.log('done cases')
      );
  }

}