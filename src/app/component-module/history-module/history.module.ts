import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { HistoryComponent } from "./history.component";

import { HistoryRoutingModule } from "./history-routing.module";

import { MaterialModule } from "../../shared/material.module";

@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    HistoryRoutingModule,
    MaterialModule
  ]
})
export class HistoryModule { }
