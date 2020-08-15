import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-sitedetails',
  templateUrl: './sitedetails.component.html',
  styleUrls: ['./sitedetails.component.scss']
})
export class SitedetailsComponent implements OnInit {

  searchTerm: string = '';
  sortBy: string = '';
  newDomain: any = {};

  constructor(private appService: AppService) {
    this.newDomain.subdomain = [{}];
    appService.getDomainList().subscribe(res => {
      appService.domainList = res;
    }, (e) => {
      appService.domainList = [];
    })

  }

  ngOnInit() {

  }
  addDomainToDomainList(domain) {
    if (!domain.domain) {
      alert("Domain is mandatory");
      return;
    }
    if (!domain.storage) {
      alert("Storage is mandatory");
      return;
    }
    if (!domain.monthlyVisitorCapacity) {
      alert("Monthly visitors is mandatory");
      return;
    }
  
   
    console.log(domain)
    this.appService.domainList.push({ 
      ...domain, 
      subdomain: domain.subdomain.filter(s => { return s && s.name }) ,
      id:this.appService.domainList.length,
      "plan":"Professional Plan",
      "usedStorage": "0gb",
      "domainTag": "Primary",
      "availableDomains": 1,
      "usedDomains": 0,
      "montlyVisitor": 0,
      "status":1,
    });
    (<any>window).$("#addNewSiteModal").modal("hide");
  }

  getDomainList() {
    let domainList = [...this.appService.domainList];
    if (this.searchTerm) {
      domainList = domainList.filter((domain) => {
        if (domain && domain.subdomain && domain.subdomain.length) {
          for (let i = 0; i < domain.subdomain.length; i++) {
            if (new RegExp(this.searchTerm, "i").test(domain.subdomain[i].name)) {
              return true;
            }
          }
        }
        return new RegExp(this.searchTerm, "i").test(domain.domain);
      });
    }
    if (this.sortBy) {
      domainList.sort((a, b) => {
        if (a[this.sortBy] > b[this.sortBy]) return -1;
        if (a[this.sortBy] < b[this.sortBy]) return 1;
        return 0;
      })
    }
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
