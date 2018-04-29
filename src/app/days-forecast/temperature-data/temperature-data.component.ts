import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { CityWeatherDataService } from '../../shared/city-weather-data.service';

@Component({
  selector: 'app-temperature-data',
  templateUrl: './temperature-data.component.html',
  styleUrls: ['./temperature-data.component.css']
})
export class TemperatureDataComponent implements OnInit {

  @ViewChild('chartTarget') chartTarget: ElementRef;

  city: string;
  country:string;
  temperatureMax: number[] = [];
  temperatureMin: number[] = [];
  day: string[] = [];

  constructor(private CityWeatherDataService: CityWeatherDataService){}

  daysForecast(city,country){

    this.CityWeatherDataService.daysForecast(city,country)
    .subscribe(data => {
     
      this.temperatureMax=data.map(x=>x.temperatureMax);
      this.temperatureMin=data.map(x=>x.temperatureMin);
      this.day=data.map(x=>x.day.slice(5));
      
      const options: Highcharts.Options = {
        chart: {
          type: 'line'
        },
        title: {
          text: '16 Days Maximum and Minimum Temperature'
        },
        
        xAxis: {
          categories: this.day
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)'
          }
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
          name: 't°C, max',
          data: this.temperatureMax
        }, {
          name: 't°C, min',
          data: this.temperatureMin
        }]
    };
  
    this.chart = chart(this.chartTarget.nativeElement, options);

    });
      
  }

  chart: Highcharts.ChartObject;
  
  ngOnInit() {
    this.daysForecast("London","UK");
  }
}