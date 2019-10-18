import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDragDropModule } from 'ng-drag-drop';
import { DropDivComponent } from './drop-div.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    DropDivComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgDragDropModule.forRoot()
  ],
  exports: [
    DropDivComponent
  ]
})
export class DropDivModule { }
