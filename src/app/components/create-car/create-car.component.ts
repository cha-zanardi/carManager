import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../models/car";
import {CarService} from "../../services/car.service";
import {CreateCar} from "../../models/create-car";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  submitted: boolean = false;

  car?: Car;

  createCarForm: FormGroup = this.fb.group({
    title: '',
    address: '',
    brand: '',
    model: '',
    model_year: '',
    issuance: '',
    mileage: '',
    fuel: '',
    color: '',
    numbers_doors: '',
    horse_power: '',
    price: '',
    pictures: [],
    sold: ''
  });

  constructor(private carService: CarService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.submitted = true;

    if (this.createCarForm.invalid) {
      return;
    }


    let car: CreateCar = {
      title: this.createCarForm.value.title,
      address: this.createCarForm.value.address,
      brand: this.createCarForm.value.brand,
      model: this.createCarForm.value.model,
      model_year: this.createCarForm.value.model_year,
      issuance: this.createCarForm.value.issuance,
      mileage: this.createCarForm.value.mileage,
      fuel: this.createCarForm.value.fuel,
      color: this.createCarForm.value.color,
      numbers_doors: this.createCarForm.value.numbers_doors,
      horse_power: this.createCarForm.value.horse_power,
      price: this.createCarForm.value.price,
      pictures: [this.createCarForm.value.pictures],
      sold: this.createCarForm.value.sold
    };

    this.carService.create(car)
      .subscribe({
        next: ok => {
        }
      });
    this.router.navigate(['/cars']);


  }

  get f() {
    return this.createCarForm.controls;
  }

}
