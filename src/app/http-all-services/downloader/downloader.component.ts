import { Component, OnInit } from '@angular/core';
import { DownloaderService } from 'src/app/shared/services/downloader.service';


@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.scss']
})
export class DownloaderComponent implements OnInit {
  message: string;
  constructor(
    private uploaderService: DownloaderService
  ) { }

  ngOnInit() {
  }
  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
        msg => {
          input.value = null;
          this.message = msg;
        }
      );
    }
  }


}
