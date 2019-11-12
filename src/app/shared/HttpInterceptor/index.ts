/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UploadInterceptor } from './http-interceptor-providers.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { NoopInterceptorService } from './noop-interceptor.service';
import { EnsureHttpsInterceptorService } from './ensure-https-interceptor.service';
import { TrimNameInterceptorService } from './trim-name-interceptor.service';

/* 拦截器实现 */
export const httpInterfaceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS, useClass: NoopInterceptorService, multi: true
    },
    {
        provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptorService, multi: true
    },
    {
        provide: HTTP_INTERCEPTORS, useClass: TrimNameInterceptorService, multi: true
    },
    {
        provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true
    },
    {
        provide: HTTP_INTERCEPTORS, useClass: UploadInterceptor, multi: true
    },
    
];
