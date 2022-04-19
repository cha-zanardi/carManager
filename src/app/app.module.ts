import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeeCarsComponent } from './components/see-cars/see-cars.component';
import { CarComponent } from './components/car/car.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {registerLocaleData} from "@angular/common";
import localFR from '@angular/common/locales/fr';
import { CreateCarComponent } from './components/create-car/create-car.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

registerLocaleData(localFR);
@NgModule({
  declarations: [
    AppComponent,
    SeeCarsComponent,
    CarComponent,
    CreateCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID,useValue:"fr"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
