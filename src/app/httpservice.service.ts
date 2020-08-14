import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = location.origin;
  // baseUrl = 'api-end-point' || location.origin;

  constructor(private httpClient: HttpClient) { }

  get(url) {
    return this.httpClient.get(this.baseUrl + url)
  }
}
