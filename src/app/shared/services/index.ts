/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {UploadInterceptor } from './http-interceptor-providers.service';
export const httpInterfaceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS, useClass: UploadInterceptor, multi: true
    }
];
