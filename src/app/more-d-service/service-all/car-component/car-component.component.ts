import { Component, OnInit } from '@angular/core';
import {
  CarService,
  CarService3,
  EngineService,
  CarService2, EngineService2,
  TireService
} from 'src/app/shared/services/car-service.service';



@Component({
  selector: 'app-c-car',
  template: `<div>c:{{description}}</div>`,
  providers: [
    { provide: CarService, useClass: CarService3 }
  ]
})
export class CcarComponent {
  description: string;
  constructor(carService: CarService) {
    this.description = `${carService.getCar().description} (${carService.name})`;
  }
}

@Component({
  selector: 'app-b-car',
  template: `<div>b:{{description}}</div>
  <app-c-car></app-c-car>
  `,
  providers: [
    { provide: CarService, useClass: CarService2 },
    { provide: EngineService, useClass: EngineService2 }
  ]
})
export class BcarComponent {
  description: string;
  constructor(carService: CarService) {
    this.description = `${carService.getCar().description} (${carService.name})`;
  }
}


@Component({
  selector: 'app-a-car',
  template: `<div>a:{{description}}</div>
  <app-b-car></app-b-car>
  `
})
export class AcarComponent {
  description: string;
  constructor(carService: CarService) {
    this.description = `${carService.getCar().description} (${carService.name})`;
  }
}

@Component({
  selector: 'app-car-component',
  template: `
  <h3>Cars</h3>
  <app-a-car></app-a-car>`,
  styleUrls: ['./car-component.component.scss']
})
export class CarComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
export const CarComponents = [
  CarComponentComponent,
  CcarComponent,
  BcarComponent,
  AcarComponent
];

export const carServices = [
  CarService,
  EngineService,
  TireService
];

