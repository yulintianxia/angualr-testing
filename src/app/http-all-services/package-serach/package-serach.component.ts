import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NpmPackageInfo, PackageSerachService } from 'src/app/shared/services/package-serach.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-package-serach',
  templateUrl: './package-serach.component.html',
  styleUrls: ['./package-serach.component.scss'],
  providers: [
    PackageSerachService
  ]
})
export class PackageSerachComponent implements OnInit {
  withRefresh = false;
  packages$: Observable<NpmPackageInfo[]>;
  private searchText$ = new Subject<string>();
  constructor(private searchService: PackageSerachService) { }

  search(packageName: string) {
    console.log(packageName);
    this.searchText$.next(packageName);
  }
  ngOnInit() {
    this.packages$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(packageName =>
        this.searchService.search(packageName, this.withRefresh))
    );
  }
  toggleRefresh() { this.withRefresh = !this.withRefresh; }

}
