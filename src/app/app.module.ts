// Core

import { BrowserModule, Title } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Routing
import { EbcRoutingModule } from './app-routing.module';


//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CasesComponent } from './cases/cases.component';
import { CaseComponent } from './case/case.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';


//Pipes
import { SecureUrlPipe } from './secure-url.pipe';
import { KeysPipe } from './keys.pipe';


//Services
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
    KeysPipe,
    NotFoundComponent
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
    StaticDataService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
