import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CasesComponent } from './cases/cases.component';
import { CaseComponent } from './case/case.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'services', component: ServicesComponent},
	{path: 'cases', component: CasesComponent},
	{path: 'cases:id', component: CaseComponent},
	{path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class EbcRoutingModule { }
