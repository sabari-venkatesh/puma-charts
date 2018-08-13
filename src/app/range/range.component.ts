import { Component, OnInit } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {
  rangeValue = 5;
  rangeConfig: any = {
    behaviour: 'tap',
    range: {
      min: 1,
      max: 5
    },
    pips: {
      mode: 'positions',
      values: [0, 25, 50, 75, 100],
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
