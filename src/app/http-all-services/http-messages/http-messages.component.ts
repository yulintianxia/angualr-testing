import { Component, OnInit } from '@angular/core';
import { HttpmessageService } from 'src/app/shared/services/httpmessage.service';

@Component({
  selector: 'app-http-messages',
  templateUrl: './http-messages.component.html',
  styleUrls: ['./http-messages.component.scss']
})
export class HttpMessagesComponent implements OnInit {

  constructor(
    public messageService: HttpmessageService
  ) { }

  ngOnInit() {
  }

}
