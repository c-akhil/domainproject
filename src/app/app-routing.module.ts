import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitedetailsComponent } from './sitedetails/sitedetails.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '', pathMatch:'full',redirectTo: "sitedetails"
  },
  {
    path: "sitedetails", component: SitedetailsComponent
  },
  {
    path: "**", component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
