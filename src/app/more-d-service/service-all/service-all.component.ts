import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-all',
  templateUrl: './service-all.component.html',
  styleUrls: ['./service-all.component.scss']
})
export class ServiceAllComponent implements OnInit {

  constructor() { }
  showCars = true;
  showHeroes = true;
  showVillains = true;
  ngOnInit() {
  
  }

}
