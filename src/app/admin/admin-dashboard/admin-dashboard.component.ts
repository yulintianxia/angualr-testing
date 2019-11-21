import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sessionId = this.route.queryParamMap.pipe(
      map(params => params.get('sessionId') || 'NONE')
    );
    this.token = this.route.fragment.pipe(
      map(fragment  => fragment || 'NONE')
    );
  }
}
