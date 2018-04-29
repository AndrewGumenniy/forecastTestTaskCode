import { Component, OnInit } from '@angular/core';
import { CityWeatherDataService } from '../shared/city-weather-data.service';
import {CurrentWeatherItem } from '../shared/current-weather-item';

@Component({
  selector: 'app-days-forecast',
  templateUrl: './days-forecast.component.html',
  styleUrls: ['./days-forecast.component.css']
})
export class DaysForecastComponent implements OnInit {
  constructor(){}
  ngOnInit() {
    
  }
}