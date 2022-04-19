import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Car} from "../../models/car";

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input("carParam")
  car! : Car;

  @Output("carSelected")
  selectCarEvent : EventEmitter<Car> = new EventEmitter<Car>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCar() {
    this.selectCarEvent.emit(this.car);
  }


  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  


}
