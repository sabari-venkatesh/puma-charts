import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chartParams = {
    'colors': ['#2dadde', '#3565c8', '#0c2b75'],
    'data': [
      {
        'benchmark': {
          'name': 'hello benchmark',
          'values': [8.5, 1.5, 2, 3],
          'total': 15
        }
      },
      {
        'groupName': 'Group 1',
        'answers': [
          {
            'name': '7803 - SB16 Sprayed Sample Nozzle',
            'values': [5.8, 2.5, 1.0],
          }, {
            'name': '7801 - SB16 Fresh Scent',
            'values': [5.75, 1.54, 2.5],
          }
        ]
      },
      {
        'groupName': 'Group 2',
        'answers': [
          {
            'name': '7802 - SB16 Sprayed Sample Nozzle',
            'values': [5.8, 4.0, 2.1],
          }, {
            'name': '7800 - SB16 Fresh Scent',
            'values': [5.25, 3.5, 0.75],
          }
        ]
      }]
  };
}
