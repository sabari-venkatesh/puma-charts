import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
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

  popoverContent = `<strong>welcome</strong>`;

  toggleEvaluations(element) {
    element.currentTarget.nextElementSibling.classList.add('active');
  }

  updateMainPopover(evaluation) {
    this.popoverContent = `
    <div class="d-flex justify-content-between">
      <strong>${evaluation.name}</strong>
      <strong>${evaluation.values[0]}</strong>
    </div>
    ${evaluation.evaluators.map(evaluator => `
      <div class="d-flex justify-content-between">
        <span>${evaluator.name}</span>
        ${evaluator.values.map(value => `<span class="ml-2">${value}</span>`)}
      </div>
    `).join('')}`;
  }

  toggleStar() {
    alert('starred');
  }

  updateSubPopover(evaluator) {
    this.popoverContent = `
      <div class="d-flex justify-content-between">
        <span>${evaluator.name} - </span>
        <strong class="mr-auto">${evaluator.values[0]}</strong>
        <span class="ml-3 icon-star" (click)="toggleStar()">&#9734;</span>
      </div>
      <p>${evaluator.response}</p>
    `;
  }
}
