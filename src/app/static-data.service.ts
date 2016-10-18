import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class StaticDataService {

  constructor( private http: Http ) { }

  getData( router ) {
  	return this.http.get( './../assets/data/' + router )
  				.map((res:Response) => res.json())
  }

}
