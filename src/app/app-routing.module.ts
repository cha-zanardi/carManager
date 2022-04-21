import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeeCarsComponent} from "./components/see-cars/see-cars.component";
import {CreateCarComponent} from "./components/create-car/create-car.component";
import {CarDetailsComponent} from "./components/car-details/car-details.component";
import {CarUpdateComponent} from "./components/car-update/car-update.component";

const routes: Routes = [
  {path:'cars',component:SeeCarsComponent},
  {path:'create-car',component:CreateCarComponent},
  {path:'car-details/:id',component:CarDetailsComponent},
  {path:'car-update/:id',component:CarUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
