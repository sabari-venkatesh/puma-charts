import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { RangeComponent } from '../range/range.component';
import { ChartsComponent } from '../charts/charts.component';
import { TabsComponent } from '../tabs/tabs.component';

const routes: Routes = [
  {
    path: 'charts',
    component: ChartsComponent
  }, {
    path: 'range',
    component: RangeComponent
  }, {
    path: 'tabs',
    component: TabsComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
