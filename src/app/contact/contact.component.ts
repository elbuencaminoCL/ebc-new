import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl'],
  providers: [ NgbTabsetConfig ]
})
export class ContactComponent implements OnInit {

  	constructor(config: NgbTabsetConfig, private titleService: Title) {
		config.type = 'pills';
    }

	ngOnInit() {
    	this.titleService.setTitle( 'Contáctanos' );
	}


	ngAfterViewInit() {
		window.scrollTo(0, 0);
	}

}
