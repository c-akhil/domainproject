import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menu = [
    { name: 'Dashboard', link: '/dasboard', icon: 'fa-pie-chart' },
    { name: 'Site Details', link: '/sitedetails',icon: 'fa-credit-card' },
    { name: 'Migrations', link: '/migrations',icon: 'fa-pie-chart'  },
    { name: 'Backups', link: '/backups',icon: 'fa-hdd-o'},
    { name: 'Collaborators', link: '/collaborators',icon: 'fa-users'},
    { name: 'Support Ticket', link: '/supporttickets',icon:'fa-ticket' },
    { name: 'Open New Ticket', link: '/opennewticket',icon:'fa-plus-square' },
  ]

  ngOnInit() {

  }

  isRouteActive(link:string):boolean{
    return location.pathname.startsWith(link);
  }
}
