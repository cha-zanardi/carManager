import { Component, OnInit } from '@angular/core';
import {CarService} from "../../services/car.service";
import {Car} from "../../models/car";

@Component({
  selector: 'app-see-cars',
  templateUrl: './see-cars.component.html',
  styleUrls: ['./see-cars.component.css']
})
export class SeeCarsComponent implements OnInit {

  sortByIdValue: string = 'ASC';
  selectedCar!: Car;

  listCars: Car[] = [];



  constructor(private carService: CarService) { }

  ngOnInit(): void {

    this.carService.fetchAll()
      .subscribe({
        next: listCars => {
          this.listCars = listCars;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('completed');
        }
      });
  }

  sortOrder() {
    if (this.sortByIdValue === 'ASC') {
      this.sortByIdValue = 'DESC'
    }
    else {
      this.sortByIdValue = 'ASC'
    }
  }

  onCarSelected(car : Car) {
    this.selectedCar = car;
  }

}
