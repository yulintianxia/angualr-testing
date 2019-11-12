import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DownloaderService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  getTextFile(filename: string) {
    return this.http.get(filename, { responseType: 'text' })
      .pipe(
        tap(
          data => this.log(data, filename),
          error => this.logError(filename, error)
        )
      );
  }

  private log(filename: string, data: string) {
    const message = `DownloaderService downloaded "${filename}" and got "${data}".`;
    this.messageService.add(message);
  }

  private logError(filename: string, error: any) {
    const message = `DownloaderService failed to download "${filename}"; got error "${error.message}".`;
    console.error(message);
    this.messageService.add(message);
  }

}
