import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitedetailsComponent } from './sitedetails/sitedetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './httpservice.service';

@NgModule({
  declarations: [
    AppComponent,
    SitedetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
