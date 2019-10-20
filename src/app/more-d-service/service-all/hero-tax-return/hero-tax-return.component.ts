import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HeroTarxReturnService } from 'src/app/shared/services/hero-tarx-return.service';
import { HeroReturn } from 'src/app/shared/interfaces/hero-di';

@Component({
  selector: 'app-hero-tax-return',
  template: `
  <div class="tax-return">
  <div class="msg" [class.canceled]="message==='Canceled'">{{message}}</div>
  <fieldset>
    <span  id=name>{{taxReturn.name}}</span>
    <label id=tid>TID: {{taxReturn.tid}}</label>
  </fieldset>
  <fieldset>
    <label>
      Income: <input [(ngModel)]="taxReturn.income" class="num">
    </label>
  </fieldset>
  <fieldset>
    <label>Tax: {{taxReturn.tax}}</label>
  </fieldset>
  <fieldset>
    <button (click)="onSaved()">Save</button>
    <button (click)="onCanceled()">Cancel</button>
    <button (click)="onClose()">Close</button>
  </fieldset>
</div>
  `,
  styleUrls: ['./hero-tax-return.component.scss'],
  providers: [HeroTarxReturnService]
})
export class HeroTaxReturnComponent implements OnInit {
  message = '';
  constructor(private heroTarxReturnService: HeroTarxReturnService) { }
  @Output() close = new EventEmitter<void>();
  ngOnInit() {
  }
  get taxReturn(): HeroReturn {
    return this.heroTarxReturnService.taxReturn;
  }
  @Input()
  set taxReturn(htr: HeroReturn) {
    this.heroTarxReturnService.taxReturn = htr;
  }

  onCanceled()  {
    this.flashMessage('Canceled');
    this.heroTarxReturnService.restoreTaxReturn();
  }

  onClose()  { this.close.emit(); }

  onSaved() {
    this.flashMessage('Saved');
    this.heroTarxReturnService.saveTaxReturn();
  }

  flashMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 500);
  }

}
