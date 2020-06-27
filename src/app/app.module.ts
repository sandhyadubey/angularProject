import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpoyeeComponent } from './empoyee/empoyee.component';
import { CompanyModule } from './company/company.module';
import { MyserviceService } from './myservice.service';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpoyeeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CompanyModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor(){
     console.log('this is module');
   }
   users=[
     'chandan',
     'sandhya',
     'ashish',
     'bandhana'
   ];
 }
