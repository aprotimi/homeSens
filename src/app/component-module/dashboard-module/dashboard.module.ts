import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { DashboardComponent } from "./dashboard.component";

import { DashboardRoutingModule } from "./dashboard-routing.module";

import { MaterialModule } from "../../shared/material.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
