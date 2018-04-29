import { Component, OnInit } from '@angular/core';
import { CityWeatherDataService } from '../shared/city-weather-data.service';
import { CurrentWeatherItem } from '../shared/current-weather-item';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  currentWeatherItem: CurrentWeatherItem[] = [];
  city: string;
  country:string;

  constructor(private CityWeatherDataService: CityWeatherDataService){}
  
  currentWeather(city,country){
    this.CityWeatherDataService.currentWeather(city,country)
    .subscribe(data => this.currentWeatherItem=data);  
  }

  ngOnInit() {
    this.currentWeather("London","UK");
  }

}