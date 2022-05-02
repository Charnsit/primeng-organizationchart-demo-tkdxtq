import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import {OrganizationChartModule} from 'primeng/organizationchart';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OrganizationChartModule,
    ToastModule,
    PanelModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
