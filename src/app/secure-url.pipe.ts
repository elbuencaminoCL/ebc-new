import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'secureUrl'
})
export class SecureUrlPipe implements PipeTransform {

	constructor(private sanitizer:DomSanitizer){
		this.sanitizer = sanitizer;
	}

	transform(url) {
		let secUrl = this.sanitizer.bypassSecurityTrustStyle(url);
		console.log( secUrl );
		return secUrl;
	}

}
