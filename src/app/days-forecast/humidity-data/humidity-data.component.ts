import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { CurrentWeatherItem } from '../../shared/current-weather-item';
import { CityWeatherDataService } from '../../shared/city-weather-data.service';

@Component({
  selector: 'app-humidity-data',
  templateUrl: './humidity-data.component.html',
  styleUrls: ['./humidity-data.component.css']
})
export class HumidityDataComponent implements OnInit {

  @ViewChild('chartTarget') chartTarget: ElementRef;

  city: string;
  country:string;
  humidity: number[] = [];
  day: string[] = [];

  constructor(private CityWeatherDataService: CityWeatherDataService){}

  daysForecast(city,country){

    this.CityWeatherDataService.daysForecast(city,country)
    .subscribe(data => {

      this.humidity=data.map(x=>x.humidity);
      this.day=data.map(x=>x.day.slice(5));
      
      const options: Highcharts.Options = {
        chart: {
          type: 'column'
        },
        title: {
          text: '16 Days Average Humidity'
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          categories: this.day,
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: ''
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0,
            borderWidth: 2,
            groupPadding: 0,
            shadow: false
          }
        },
        series: [{
          name: 'Humidity',
          data: this.humidity
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