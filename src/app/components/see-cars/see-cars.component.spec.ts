import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCarsComponent } from './see-cars.component';

describe('SeeCarsComponent', () => {
  let component: SeeCarsComponent;
  let fixture: ComponentFixture<SeeCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
