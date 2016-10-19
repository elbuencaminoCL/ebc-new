import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EbcRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CasesComponent } from './cases/cases.component';
import { CaseComponent } from './case/case.component';
import { ContactComponent } from './contact/contact.component';
import { SecureUrlPipe } from './secure-url.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KeysPipe } from './keys.pipe';

import { StaticDataService } from './static-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    CasesComponent,
    CaseComponent,
    ContactComponent,
    SecureUrlPipe,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    EbcRoutingModule,
    NgbModule.forRoot(),
    Ng2PageScrollModule
  ],
  providers: [
    StaticDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
