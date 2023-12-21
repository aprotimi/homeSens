import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { MaterialModule } from './shared/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormService } from './service/form.service';
import { UtilityService } from './service/utility.service';

import { HeaderComponent } from './main-view-module/header-module/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    FormService,
    UtilityService
  ],
  bootstrap: [AppComponent],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class AppModule { }
