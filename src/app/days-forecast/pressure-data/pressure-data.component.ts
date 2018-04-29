import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { CityWeatherDataService } from '../../shared/city-weather-data.service';

@Component({
  selector: 'app-pressure-data',
  templateUrl: './pressure-data.component.html',
  styleUrls: ['./pressure-data.component.css']
})
export class PressureDataComponent implements OnInit {

  @ViewChild('chartTarget') chartTarget: ElementRef;

  city: string;
  country:string;
  pressure: number[] = [];
  day: string[] = [];

  constructor(private CityWeatherDataService: CityWeatherDataService){}

  daysForecast(city,country){

    this.CityWeatherDataService.daysForecast(city,country)
    .subscribe(data => {

      this.pressure=data.map(x=>x.pressure);
      this.day=data.map(x=>x.day.slice(5));
       
      const options: Highcharts.Options = {
        chart: {
          type: 'line'
        },
        title: {
          text: '16 Days Average Pressure'
        },
        xAxis: {
          categories: this.day
        },
        yAxis: {
          title: {
            text: 'Pressure, mmHg'
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
          name: 'Pressure',
          data: this.pressure
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