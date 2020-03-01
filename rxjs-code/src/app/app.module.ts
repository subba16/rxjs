import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfFromComponent } from './of-from/of-from.component';
import { MapTapComponent } from './map-tap/map-tap.component';
import { ShareComponent } from './share/share.component';
import {NgBusyModule} from 'ng-busy';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { DebounceComponent } from './debounce/debounce.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MergemapComponent } from './mergemap/mergemap.component';

@NgModule({
  declarations: [
    AppComponent,
    OfFromComponent,
    MapTapComponent,
    ShareComponent,
    SwitchmapComponent,
    DebounceComponent,
    MergemapComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgBusyModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
