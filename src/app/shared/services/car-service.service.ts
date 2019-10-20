import { Injectable } from '@angular/core';

export class Engine {
  cylinders = 4;
}

export class Tires {
  make = 'Fintstone';
  model = 'Square';
}

//Model
export class Car {
  name = 'Avocado Motors';
  constructor(public engine: Engine, public tires: Tires) { }
  get description() {
    return `${this.name} car with ` +
      `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
  }
}

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  id = 'E1';
  constructor() { }
  getEngine() {
    return new Engine();
  }
}

@Injectable({
  providedIn: 'root'
})
export class EngineService2 {
  id = 'E2';
  constructor() { }
  getEngine() {
    const eng = new Engine();
    eng.cylinders = 8;
    return eng;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TireService {
  id = 'T1';
  constructor() { }
  getTires() {
    return new Tires();
  }
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  id = 'c1';
  constructor(
    protected engineService: EngineService,
    protected tireService: TireService
  ) { }
  getCar() {
    return new Car(
      this.engineService.getEngine(),
      this.tireService.getTires()
    );
  }
  get name() {
    return `${this.id}-${this.engineService.id}-${this.tireService.id}`;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CarService2 extends CarService {
  id = 'c2';
  constructor(
    protected engineService: EngineService,
    protected tireService: TireService
  ) {
    super(engineService, tireService);
  }
  getCar() {
     const car = super.getCar();
     car.name = 'BamBam Motors, Brovan 2000';
     return car;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CarService3 extends CarService2 {
  id = 'c3';
  constructor(
    protected engineService: EngineService,
    protected tireService: TireService
  ) {
    super(engineService, tireService);
  }
  getCar() {
     const car = super.getCar();
     car.name = 'Chizzamm Motors, Calico UltraMax Supreme';
     return car;
  }
}




