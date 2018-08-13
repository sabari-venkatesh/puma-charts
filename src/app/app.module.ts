import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { AppComponent } from './app.component';
import { RangeComponent } from './range/range.component';
import { ChartsComponent } from './charts/charts.component';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  declarations: [
    AppComponent,
    RangeComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PopoverModule.forRoot(),
    AppRoutingModule,
    NouisliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
