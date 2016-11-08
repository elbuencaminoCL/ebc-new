import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.styl']
})
export class NotFoundComponent implements OnInit {

  constructor( private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( 'Página no encontrada' );
  }

}
