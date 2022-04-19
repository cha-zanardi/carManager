import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../models/car";
import {CreateCar} from "../models/create-car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private BASE_URL = "http://localhost:3000";

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  };

  constructor(private http : HttpClient) { }

  fetchAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.BASE_URL}/cars`);
  }

  create(car: CreateCar): Observable<Car[]> {
    return this.http.post<Car[]>(`${this.BASE_URL}/cars`, car, this.httpOptions);
  }
}
