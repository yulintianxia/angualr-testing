import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-setters-parent',
  templateUrl: './setters-parent.component.html',
  styleUrls: ['./setters-parent.component.scss']
})
export class SettersParentComponent implements OnInit, AfterViewInit {
  list = ['111', '222', '333'];
  @ViewChild('setters', { static: false }) template: TemplateRef<any>;
  @ViewChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>;
  @ViewChild('setters', { read: ElementRef, static: false }) componentChildElement: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.template, this.templateRef, this.componentChildElement);
  }

  ngOnInit() {
  }

}
