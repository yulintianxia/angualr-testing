import { Component, OnInit, Input, ViewChild, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { AdItem } from './adconfig/ad-items';
import { AdhostDirective } from '../shared/directives/adhost.directive';
import { AdComponent } from './adconfig/ad.component';


@Component({
  selector: 'app-adbanner',
  template: `
  <div class="ad-banner-example">
  <h3>Advertisements</h3>
  <ng-template appAdhost></ng-template>
 </div>
  `,
  styleUrls: ['./adbanner.component.scss']
})
export class AdbannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentIndex = -1;
  @ViewChild(AdhostDirective, { static: true }) appHost: AdhostDirective;
  interval: any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
  loadComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentIndex];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    let viewContainerRef = this.appHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    console.log(adItem, componentFactory, viewContainerRef, componentRef);
    (componentRef.instance as AdComponent).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}



