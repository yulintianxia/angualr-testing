import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdItems } from './adItem';
import { AdTestDirective } from '../shared/directives/ad-test.directive';
import { Adscomponent } from '../shared/interfaces/ad.interface';

@Component({
  selector: 'app-adtesting',
  templateUrl: './adtesting.component.html',
  styleUrls: ['./adtesting.component.scss']
})
export class AdtestingComponent implements OnInit {
  @Input() ads: AdItems[];
  currentAdIndex = -1;
  @ViewChild(AdTestDirective, { static: true }) adTest: AdTestDirective
  Interval: any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.load();
  }
  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];
    let componentFactoryResolver = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    let viewContainerRef = this.adTest.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactoryResolver);
   (componentRef.instance as Adscomponent).data = adItem.data;

  }
  load() {
    this.Interval = setInterval(() => {
      this.loadComponent();
    }, 3000)
  }

}
