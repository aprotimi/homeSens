
// Angular Modules
import { NgModule } from '@angular/core';

// Feature Modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
    imports: [
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSliderModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonToggleModule
    ],
    exports: [
      MatDialogModule,
      MatButtonModule,
      MatTabsModule,
      MatSlideToggleModule,
      MatAutocompleteModule,
      MatMenuModule,
      MatSliderModule,
      MatTooltipModule,
      MatCardModule,
      MatButtonToggleModule
    ],
    declarations: [],
    providers: []
})
export class MaterialModule { }
