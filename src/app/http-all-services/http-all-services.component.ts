import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-all-services',
  templateUrl: './http-all-services.component.html',
  styleUrls: ['./http-all-services.component.scss']
})
export class HttpAllServicesComponent implements OnInit {
  showHeroes = true;
  showConfig = true;
  showDownloader = true;
  showUploader = true;
  showSearch = true;
  
  constructor() { }
  ngOnInit() {
  }
  toggleHeroes() { this.showHeroes = !this.showHeroes; }
  toggleConfig() { this.showConfig = !this.showConfig; }
  toggleDownloader() { this.showDownloader = !this.showDownloader; }
  toggleUploader() { this.showUploader = !this.showUploader; }
  toggleSearch() { this.showSearch = !this.showSearch; }
}
