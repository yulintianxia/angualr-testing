import { Component, OnInit } from '@angular/core';
import { ConfigsService, Config } from 'src/app/shared/services/configs.service';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss']
})
export class ConfigsComponent implements OnInit {
  error: any;
  headers: string[];
  configs: Config;
  constructor(
    private configService: ConfigsService
  ) {
    console.log(this.configService);
  }
  ngOnInit() {
    this.showConfig();
  }
  clear() {
    this.configs = undefined;
    this.error = undefined;
    this.headers = undefined;
  }
  showConfig() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.configs = { ...data },
        error => this.error = error
      );
  }
  showConfig_v1() {
    this.configService.getConfig_1()
      .subscribe((data: Config) => this.configs = {
        heroesUrl: data['heroesUrl'],
        textfile: data['textfile']
      });
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
        // access the body directly, which is typed as `Config`.
        console.log(this.headers);
        this.configs = { ...resp.body };
      });
  }
  makeError() {
    console.log(this.headers);
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error);
  }

}
