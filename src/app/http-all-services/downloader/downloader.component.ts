import { Component, OnInit } from '@angular/core';
import { DownloaderService } from 'src/app/shared/services/downloader.service';


@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.scss']
})
export class DownloaderComponent implements OnInit {
  contents: string;
  constructor(
    private downloaderService: DownloaderService
  ) { }

  ngOnInit() {
  }
  clear() {
    this.contents = undefined;
  }
  download() {
    this.downloaderService.getTextFile('assets/textfile.txt').subscribe(
      results => this.contents = results
    );
  }


}
