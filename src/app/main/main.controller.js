(function () {
  'use strict';

  angular
    .module('angularTemplateProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {

  }

})();

var app = angular.module('angularTemplateProject');

app.controller('MainCtrl', function ($scope) {
  Highcharts.chart('tempcontainer', {

    chart: {
      zoomType: 'xy'
    },
    title: {
      text: '월 구매 유저'
    },
    xAxis:
    [
      {
        categories: ['1월', '2월', '3월', '4월'],
        crosshair: true
      }
    ],

    yAxis: [
      { // Primary yAxis
        labels: {
          format: '{value}%',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        title: {
          text: 'Percentage',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        }
      },
      { // Secondary yAxis
        title: {
          text: 'User',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        labels: {
          format: '{value} 명',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        opposite: true
      }
    ],
    tooltip: {
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'percent',
        datalabes: {
          enabled: true,
          allowOverlap: true
        }
      },
      series: {

      }
    },
    legend: {
      layout: 'horizontal',
      align: 'left',
      x: 120,
      y: 0,
      floating: false,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [
      {
        name: '첫구매유저',
        type: 'column',
        yAxis: 0,
        showInLegend: false,
        data: [32094, 20193, 29154, 19179],
        tooltip: {
        }
      },
      {
        name: '복귀구매유저',
        type: 'column',
        yAxis: 0,
        showInLegend: false,
        data: [35661, 21993, 50606, 20965],
        tooltip: {
        }
      },
      {
        name: '연속구매유저',
        type: 'column',
        yAxis: 0,
        showInLegend: false,
        data: [129985, 120166, 117730, 103500],
        tooltip: {
        }
      },
      {
        name: '첫구매유저',
        type: 'line',
        yAxis: 1,
        marker: {
          enabled: false
        },
        data: [32094, 20193, 29154, 19179],
        tooltip: {
          valueSuffix: ' 명'
        }
      },
      {
        name: '복귀구매유저',
        type: 'line',
        yAxis: 1,
        marker: {
          enabled: false
        },
        data: [35661, 21993, 50606, 20965],
        tooltip: {
          valueSuffix: ' 명'
        }
      },
      {
        name: '연속구매유저',
        type: 'line',
        yAxis: 1,
        marker: {
          enabled: false
        },
        data: [129985, 120166, 117730, 103500],
        tooltip: {
          valueSuffix: ' 명'
        }
      }
    ]
  });

});
