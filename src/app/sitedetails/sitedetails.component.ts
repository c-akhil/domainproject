import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sitedetails',
  templateUrl: './sitedetails.component.html',
  styleUrls: ['./sitedetails.component.scss']
})
export class SitedetailsComponent implements OnInit {

  searchTerm: string = '';

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
    let domainList = [...this.appService.domainList].filter((domain) => {
      if (domain && domain.subdomain && domain.subdomain.length) {
        for (let i = 0; i < domain.subdomain.length; i++) {
          if (new RegExp(this.searchTerm, "i").test(domain.subdomain[i].name)) {
            return true;
          }
        }
      }
      return new RegExp(this.searchTerm, "i").test(domain.domain);
    });
    return domainList;
  }
  getPercentage(val, total) {
    return (parseInt(val) / parseInt(total)) * 100;
  }

  getCircleStyle(val, total) {
    let percent = (parseInt(val) / parseInt(total)) * 100;
    let p = (18 / 5) * percent;

    if (percent < 12.5) p = -90;
    else if (percent < 12.5 * 2) p = -45;
    else if (percent < 12.5 * 3) p = 0;
    else if (percent < 12.5 * 4) p = 45;
    else if (percent < 12.5 * 5) p = 90;
    else if (percent < 12.5 * 6) p = 135;
    else if (percent < 12.5 * 7) p = 180;

    return `linear-gradient(#fff, #fff) padding-box, 
    linear-gradient(${p}deg, #f2f2f2 50%, transparent 0) border-box,
    linear-gradient(to right, #f2f2f2 50%, blue 0) border-box`;
  }
}
