import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { CityWeatherDataService } from '../../shared/city-weather-data.service';

@Component({
  selector: 'app-wind-data',
  templateUrl: './wind-data.component.html',
  styleUrls: ['./wind-data.component.css']
})
export class WindDataComponent implements OnInit {
  @ViewChild('chartTarget') chartTarget: ElementRef;

  city: string;
  country:string;

  windAverage: number[] = [];
  windGust: number[] = [];
  day: string[] = [];

  constructor(private CityWeatherDataService: CityWeatherDataService){}

  daysForecast(city,country){

    this.CityWeatherDataService.daysForecast(city,country)
    .subscribe(data => {

    	this.windAverage=data.map(x=>x.windAverage);
      this.windGust=data.map(x=>x.windGust);
      this.day=data.map(x=>x.day.slice(5));

      const options: Highcharts.Options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Wind speed during 16 days'
      },
      xAxis: {
        categories: this.day
      },
      yAxis: {
        title: {
          text: 'Wind speed (m/s)'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [{ // Light air
          from: 0.3,
          to: 1.5,
          color: 'rgba(68, 170, 213, 0.1)',
          label: {
            text: 'Light air',
            style: {
              color: '#606060'
            }
          }
        }, { // Light breeze
          from: 1.5,
          to: 3.3,
          color: 'rgba(0, 0, 0, 0)',
          label: {
            text: 'Light breeze',
            style: {
              color: '#606060'
            }
          }
        }, { // Gentle breeze
          from: 3.3,
          to: 5.5,
          color: 'rgba(68, 170, 213, 0.1)',
          label: {
            text: 'Gentle breeze',
            style: {
              color: '#606060'
            }
          }
        }, { // Moderate breeze
          from: 5.5,
          to: 8,
          color: 'rgba(0, 0, 0, 0)',
          label: {
            text: 'Moderate breeze',
            style: {
              color: '#606060'
            }
          }
        }, { // Fresh breeze
          from: 8,
          to: 11,
          color: 'rgba(68, 170, 213, 0.1)',
          label: {
            text: 'Fresh breeze',
            style: {
              color: '#606060'
            }
          }
        }, { // Strong breeze
          from: 11,
          to: 14,
          color: 'rgba(0, 0, 0, 0)',
          label: {
            text: 'Strong breeze',
            style: {
              color: '#606060'
            }
          }
        }, { // High wind
          from: 14,
          to: 15,
          color: 'rgba(68, 170, 213, 0.1)',
          label: {
            text: 'High wind',
            style: {
              color: '#606060'
            }
          }
        }]
      },
      tooltip: {
        valueSuffix: ' m/s'
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'Wind Average',
        data: this.windAverage

      }, {
        name: 'Wind Gusts',
        data: this.windGust
      }],
      navigation: {
        menuItemStyle: {
          fontSize: '10px'
        }
      }
    };
  
    this.chart = chart(this.chartTarget.nativeElement, options);

    });
      
  }

  chart: Highcharts.ChartObject;
  
  ngOnInit() {
    this.daysForecast("London","UK");
  }
}

