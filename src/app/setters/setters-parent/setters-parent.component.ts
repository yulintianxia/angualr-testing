import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-setters-parent',
  templateUrl: './setters-parent.component.html',
  styleUrls: ['./setters-parent.component.scss']
})
export class SettersParentComponent implements OnInit, AfterViewInit {
  list = ['111', '222', '333'];
  @ViewChild('setters') template: TemplateRef<any>;
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @ViewChild('setters', { read: ElementRef }) componentChildElement: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.template, this.templateRef, this.componentChildElement);
  }

  ngOnInit() {
  }

}
