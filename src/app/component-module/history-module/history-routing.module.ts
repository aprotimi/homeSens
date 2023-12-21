import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HistoryComponent } from './history.component';


const routes: Routes = [
    { path: "", component: HistoryComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class HistoryRoutingModule { }