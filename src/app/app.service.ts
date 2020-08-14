import { Injectable } from '@angular/core';
import { HttpService } from './httpservice.service';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  domainList:any = [];

  constructor(private httpService:HttpService) {

  }

  getDomainList() {
    return this.httpService.get('/assets/api/domainList');
  }

  
}
