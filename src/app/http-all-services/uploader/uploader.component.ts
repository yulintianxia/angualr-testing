import { Component, OnInit } from '@angular/core';
import { UploaderService } from 'src/app/shared/services/uploader.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  message: string;
  constructor(
    private uploaderService: UploaderService,
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
