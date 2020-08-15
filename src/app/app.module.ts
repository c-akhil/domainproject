import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitedetailsComponent } from './sitedetails/sitedetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './httpservice.service';
import { FormsModule } from '@angular/forms';
import { HighlightSearch } from './pipes/hightlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SitedetailsComponent,
    HighlightSearch,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
