import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
