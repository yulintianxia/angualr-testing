import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'src/app/shared/services/message.service';
import { of } from 'rxjs';
import { map, catchError, tap, last } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(
    private http: HttpClient,
    private message: MessageService

  ) { }
  /* 多文件list上传 */
  // If uploading multiple files, change to:
  // upload(files: FileList) {
  //   const formData = new FormData();
  //   files.forEach(f => formData.append(f.name, f));
  //   new HttpRequest('POST', '/upload/file', formData, {reportProgress: true});
  //   ...
  // }
  upload(file: File) {
    if (!file) {
      return;
    }
     // COULD HAVE WRITTEN:
    // return this.http.post('/upload/file', file, {
    //   reportProgress: true,
    //   observe: 'events'
    // }).pipe(

    // Create the request object that POSTs the file to an upload endpoint.
    // The `reportProgress` option tells HttpClient to listen and return
    // XHR progress events.
    const req = new HttpRequest('POST', '/upload/file', file, {
      reportProgress: true
    });
    console.log(req);
    return this.http.request(req)
      .pipe(
        map(event => this.getEventMessage(event, file)),
        tap(message => this.showProgress(message)),
        last(),
        catchError(this.handleError(file))
      );
  }

  private getEventMessage(event: HttpEvent<any>, file: File) {
    // console.log(event.type, file, HttpEventType);
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;
      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        return `File "${file.name}" is ${percentDone}% uploaded.`;
      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;
      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }

  private handleError(file: File) {
    const userMessage = `${file.name} upload failed.`;
    return (error: HttpErrorResponse) => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      const message = (error.error instanceof Error) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;
      this.message.add(`${userMessage} ${message}`);
      // Let app keep running but indicate failure.
      return of(userMessage);
    };
  }
  private showProgress(message: string) {
    this.message.add(message);
  }
}
