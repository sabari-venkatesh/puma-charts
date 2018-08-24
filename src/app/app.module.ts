import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { RangeComponent } from './range/range.component';
import { ChartsComponent } from './charts/charts.component';
import { NouisliderModule } from 'ng2-nouislider';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    RangeComponent,
    ChartsComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    NouisliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
