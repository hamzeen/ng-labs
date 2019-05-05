declare var require: any;

import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highstock";
import { constants } from './graph-data';

@Component({
  selector: 'app-root',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {
  title = 'graph page';
  highChartGraphData = constants.cordinates;

  Highcharts = Highcharts;
  chartOptions: any;

  constructor() {}

  public ngOnInit() {
    setTimeout(()=> {
      this.drawGraph(this.highChartGraphData)
    }, 5000);
  }


  public drawGraph(graphData) {

    Highcharts.setOptions({
      lang: {
        rangeSelectorZoom: constants.name
      }
    });

    this.chartOptions = {

      title: {
        text: null
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      scrollbar: {
        enabled: false
      },
      navigator: {
        enabled: false
      },
      yAxis: {
        opposite:false
      },

      rangeSelector: {
        selected: 1,
        inputEnabled: false,
        buttonTheme: {
          width: 70,
          padding: 5,
          fill: 'transparent',

          style: {
            color: 'grey',
            stroke: 'grey',
            borderColor: 'grey',
            strokeWidth: 1,
            fill: '#000'
          },

          states: {
            hover: {
              fill: 'red',
              style: {
                color: '#FFFFFF',
                stroke: '#FFF',
              }
            },
            select: {
              fill: '#ff0',
              style: {
                color: 'black',
                stroke: 'black',
              }
            }
          },
        },
        labelStyle: {
          borderColor: 'red',
          stroke: 'red',
          fontSize: '13px',
          color: 'red',
          /*display: 'none'*/
        },
      },

      series: [{
        name: 'AAPL Stock Price',
        data: graphData,
        type: 'spline',
        tooltip: {
          valueDecimals: 2
        }
      }]
    }

  }
}
