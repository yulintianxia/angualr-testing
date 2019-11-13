/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UploadInterceptor } from './http-interceptor-providers.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { NoopInterceptorService } from './noop-interceptor.service';
import { EnsureHttpsInterceptorService } from './ensure-https-interceptor.service';
import { TrimNameInterceptorService } from './trim-name-interceptor.service';
import { LoggingInterceptorService } from './logging-interceptor.service';
import { CachingInterceptorService } from './caching-interceptor.service';

/* 拦截器实现 */
export const httpInterfaceptorProviders = [
    {
        /* 无用的拦截器 */
        provide: HTTP_INTERCEPTORS, useClass: NoopInterceptorService, multi: true
    },
    {
        provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptorService, multi: true
    },
    {
        provide: HTTP_INTERCEPTORS, useClass: TrimNameInterceptorService, multi: true
    },
    /* token验证的拦截器 */
    {
        provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true
    },
    {
        /* 日志拦截器 */
        provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true
    },
    {
        /* 监听进度的拦截器 */
        provide: HTTP_INTERCEPTORS, useClass: UploadInterceptor, multi: true
    },
    {
        /* 缓存的拦截器 */
        provide: HTTP_INTERCEPTORS, useClass: CachingInterceptorService, multi: true
    }
];
