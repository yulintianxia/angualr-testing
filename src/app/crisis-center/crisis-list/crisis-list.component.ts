import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Crisis } from 'src/app/shared/interfaces/Crisis.interface';
import { ActivatedRoute } from '@angular/router';
import { CrisisService } from 'src/app/shared/services/crisis-service.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  selectedId: number;
  constructor(
    private service: CrisisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
    );
  }

}
