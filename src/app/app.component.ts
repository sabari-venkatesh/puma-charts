import { Component } from '@angular/core';
import { AngularWaitBarrier } from '../../node_modules/blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // chartParams = {
  //   'colors': ['#2dadde', '#3565c8', '#0c2b75', '#ddd'],
  //   'data': [
  //     {
  //       'benchmark': {
  //         'name': 'hello benchmark',
  //         'values': [4.75, 2.25, .75, 1.25]
  //       }
  //     },
  //     {
  //       'groupName': 'Group 1',
  //       'evaluations': [
  //         {
  //           'name': '7803 - SB16 Sprayed Sample Nozzle',
  //           'values': [5.85, 1, 1.15, 2],
  //         }, {
  //           'name': '7801 - SB16 Fresh Scent',
  //           'values': [5.35, 2.65, .5, 1.5],
  //         }
  //       ]
  //     },
  //     {
  //       'groupName': 'Group 2',
  //       'evaluations': [
  //         {
  //           'name': '7802 - SB16 Sprayed Sample Nozzle',
  //           'values': [4.55, 3.45, 1, 1],
  //         }, {
  //           'name': '7800 - SB16 Fresh Scent',
  //           'values': [3.75, 3.75, 1.5, 1],
  //         }
  //       ]
  //     }]
  // };

  chartParams = {
    'colors': ['#faa838'],
    'data': [
      {
        'benchmark': {
          'name': 'hello benchmark',
          'values': [4.75]
        }
      },
      {
        'groupName': 'Group 1',
        'evaluations': [
          {
            'name': '7803 - SB16 Sprayed Sample Nozzle',
            'values': [3.85],
            'evaluators': [{
              'name': 'Colin Ochel',
              'response': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, optio.',
              'values': [2.85]
            }, {
              'name': 'Marco van Wagenberg',
              'response': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti quia, quae cupiditate',
              'values': [3.45]
            }, {
              'name': 'Colin Ochel',
              'response': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, optio.',
              'values': [2.55]
            }, {
              'name': 'Marco van Wagenberg',
              'response': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti quia, quae cupiditate',
              'values': [4.15]
            }]
          }, {
            'name': '7801 - SB16 Fresh Scent',
            'values': [3.35],
            'evaluators': [{
              'name': 'Colin Ochel',
              'response': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, optio.',
              'values': [2.85]
            }, {
              'name': 'Marco van Wagenberg',
              'response': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti quia, quae cupiditate',
              'values': [3.45]
            }, {
              'name': 'Colin Ochel',
              'response': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, optio.',
              'values': [2.55]
            }, {
              'name': 'Marco van Wagenberg',
              'response': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti quia, quae cupiditate',
              'values': [4.15]
            }]
          }
        ]
      },
      {
        'groupName': 'Group 2',
        'evaluations': [
          {
            'name': '7802 - Lush scent',
            'values': [4.55],
            'evaluators': [{
              'name': 'Colin Ochel',
              'response': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, optio.',
              'values': [2.85]
            }, {
              'name': 'Marco van Wagenberg',
              'response': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti quia, quae cupiditate',
              'values': [3.45]
            }, {
              'name': 'Colin Ochel',
              'response': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, optio.',
              'values': [2.55]
            }, {
              'name': 'Marco van Wagenberg',
              'response': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti quia, quae cupiditate',
              'values': [4.15]
            }]
          }, {
            'name': '7800 - Not sprayed',
            'values': [3.75],
            'evaluators': [{
              'name': 'Colin Ochel',
              'response': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, optio.',
              'values': [2.85]
            }, {
              'name': 'Marco van Wagenberg',
              'response': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti quia, quae cupiditate',
              'values': [3.45]
            }, {
              'name': 'Colin Ochel',
              'response': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, optio.',
              'values': [2.55]
            }, {
              'name': 'Marco van Wagenberg',
              'response': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti quia, quae cupiditate',
              'values': [4.15]
            }]
          }
        ]
      }]
  };

  benchmarkTotal = this.chartParams.data[0].benchmark.values.reduce((a, b) => a + b, 0);

  toggleEvaluations(element) {
    element.currentTarget.nextElementSibling.classList.add('active');
  }
}
