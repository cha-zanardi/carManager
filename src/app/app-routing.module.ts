import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeeCarsComponent} from "./components/see-cars/see-cars.component";
import {CreateCarComponent} from "./components/create-car/create-car.component";

const routes: Routes = [
  {path:'cars',component:SeeCarsComponent},
  {path:'create-car',component:CreateCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
