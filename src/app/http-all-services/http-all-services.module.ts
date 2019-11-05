import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpAllServicesComponent } from './http-all-services.component';
import { ConfigsComponent } from './configs/configs.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { HeroesHttpComponent } from './heroes-http/heroes-http.component';
import { HttpInterfaceptorsComponent } from './http-interfaceptors/http-interfaceptors.component';
import { HttpMessagesComponent } from './http-messages/http-messages.component';
import { PackageSerachComponent } from './package-serach/package-serach.component';
import { UploaderComponent } from './uploader/uploader.component';



@NgModule({
  declarations: [
    HttpAllServicesComponent,
    ConfigsComponent,
    DownloaderComponent,
    HeroesHttpComponent,
    HttpInterfaceptorsComponent,
    HttpMessagesComponent,
    PackageSerachComponent,
    UploaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HttpAllServicesComponent,
    ConfigsComponent,
    DownloaderComponent,
    HeroesHttpComponent,
    HttpInterfaceptorsComponent,
    HttpMessagesComponent,
    PackageSerachComponent,
    UploaderComponent
  ]
})
export class HttpAllServicesModule { }
