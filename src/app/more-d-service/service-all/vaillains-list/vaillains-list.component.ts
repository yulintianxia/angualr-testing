import { Component, OnInit } from '@angular/core';
import { VaillainsService, Villain } from 'src/app/shared/services/vaillains.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vaillains-list',
  template: `
  <div>
  <h3>Villains</h3>
  <ul>
    <li *ngFor="let villain of villains | async">{{villain.name}}</li>
  </ul>
</div>
  `,
  styleUrls: ['./vaillains-list.component.scss'],
  providers: [VaillainsService]
})
export class VaillainsListComponent implements OnInit {
  villains: Observable<Villain[]>;
  constructor(private villainsService: VaillainsService) {
    this.villains = villainsService.getVillains();
  }

  ngOnInit() {
  }

}
