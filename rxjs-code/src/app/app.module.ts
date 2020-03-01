import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfFromComponent } from './of-from/of-from.component';
import { MapTapComponent } from './map-tap/map-tap.component';
import { ShareComponent } from './share/share.component';
import {NgBusyModule} from 'ng-busy';

@NgModule({
  declarations: [
    AppComponent,
    OfFromComponent,
    MapTapComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgBusyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
