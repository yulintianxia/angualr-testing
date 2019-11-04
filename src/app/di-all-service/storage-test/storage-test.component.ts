import { Component, OnInit, Self, SkipSelf } from '@angular/core';
import { BrowserStorageService, BROWSER_STORAGE } from 'src/app/shared/services/browser-storage-service.service';

@Component({
  selector: 'app-storage-test',
  templateUrl: './storage-test.component.html',
  styleUrls: ['./storage-test.component.scss'],
  providers: [
    BrowserStorageService,
    { provide: BROWSER_STORAGE, useFactory: () => sessionStorage }
  ]
})
export class StorageTestComponent implements OnInit {
  constructor(
    @Self() private sessionStorageService: BrowserStorageService,
    @SkipSelf() private localStorageService: BrowserStorageService,
  ) { }

  ngOnInit() {
  }

  setSession() {
    this.sessionStorageService.set('hero', 'Dr Nice - Session');
  }

  setLocal() {
    this.localStorageService.set('hero', 'Dr Nice - Local');
  }
}
