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
  getPercentage(val, total) {
    return (parseInt(val) / parseInt(total)) * 100;
  }

  getCircleStyle(val, total) {
    // <div class="box" style="--v:-90deg"></div><!-- 0% -->
    // <div class="box" style="--v:-45deg"></div><!-- 12.5% -->
    // <div class="box" style="--v:  0deg"></div><!-- 25% -->
    // <div class="box" style="--v: 45deg"></div><!-- 37.5% -->
    // <div class="box" style="--v: 90deg"></div><!-- 50% -->
    let percent = (parseInt(val) / parseInt(total)) * 100;
    let p = (18 / 5) * percent;

    if (percent < 12.5) p = -90;
    else if (percent < 12.5 * 2) p = -45;
    else if (percent < 12.5 * 3) p = 0;
    else if (percent < 12.5 * 4) p = 45;
    else if (percent < 12.5 * 5) p = 90;
    else if (percent < 12.5 * 6) p = 135;
    else if (percent < 12.5 * 7) p = 180;

    console.log(p,percent,val,total)
    return `linear-gradient(#fff, #fff) padding-box, 
    linear-gradient(${p}deg, #f2f2f2 50%, transparent 0) border-box,
    linear-gradient(to right, #f2f2f2 50%, blue 0) border-box`;
  }
}
