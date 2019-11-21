import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Crisis } from 'src/app/shared/interfaces/Crisis.interface';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  editName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: DialogService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }
  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialog.confirm('Discard changes?');
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });

  }
}
