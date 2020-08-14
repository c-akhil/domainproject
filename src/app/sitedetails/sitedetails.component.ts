import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sitedetails',
  templateUrl: './sitedetails.component.html',
  styleUrls: ['./sitedetails.component.scss']
})
export class SitedetailsComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getDomainList().subscribe(res => {
      appService.domainList = res;
    }, (e) => {
      appService.domainList = [];
    })

  }

  ngOnInit() {
  }

  getDomainList() {
    return this.appService.domainList;
  }
}
