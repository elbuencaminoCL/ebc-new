import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl'],
  providers: [ NgbTabsetConfig ]
})
export class ContactComponent implements OnInit {

  	constructor(config: NgbTabsetConfig) {
		config.type = 'pills';
    }

	ngOnInit() {
	}


	ngAfterViewInit() {
		window.scrollTo(0, 0);
	}

}
