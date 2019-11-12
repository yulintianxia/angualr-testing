import { Injectable } from '@angular/core';
import { HttpResponse, HttpRequest } from '@angular/common/http';
import { MessageService } from '../services/message.service';

export interface RequestCacheEntry {
  url: string;
  response: HttpResponse<any>;
  lastRead: number;
}

export abstract class RequestCache {
  abstract get(req: HttpRequest<any>);
  abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void;
}
const maxAge = 3000; // maximum cache age (ms)

@Injectable({
  providedIn: 'root'
})
export class RequestCacheWithMapService implements RequestCache {
  cache = new Map<string, RequestCacheEntry>();

  constructor(private messenger: MessageService) { }

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < (Date.now() - maxAge);
    const expired = isExpired ? 'expired ' : '';
    this.messenger.add(
      `Found ${expired}cached response for "${url}".`);
    return isExpired ? undefined : cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    this.messenger.add(`Caching response from "${url}".`);

    const entry = { url, response, lastRead: Date.now() };
    this.cache.set(url, entry);

    // remove expired cache entries
    const expired = Date.now() - maxAge;
    this.cache.forEach(item => {
      if (item.lastRead < expired) {
        this.cache.delete(item.url);
      }
    });
    this.messenger.add(`Request cache size: ${this.cache.size}.`);
  }

}
