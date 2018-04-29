import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { CurrentWeatherItem } from './current-weather-item';
import { DaysForecastItem } from './days-forecast-item';

@Injectable()
export class CityWeatherDataService {

  constructor(private http: HttpClient){ }

  currentWeather(city,country): Observable<CurrentWeatherItem[]>{
    const params = new HttpParams()
    .set('city', city)
    .set('country', country)
    .set('key', '7fddb2fc6bae42a396f121c7bd341832');
    return this.http.get('https://api.weatherbit.io/v2.0/current', {params})
    .map(data=>{
      let forecastItemList = data["data"];
      return forecastItemList.map(function(forecastItem:any) {           
        return {
          city: forecastItem.city_name,
  		    country: forecastItem.country_code,       
          weatherDescription: forecastItem.weather.description,
          weatherIcon: forecastItem.weather.icon,
          temperature: forecastItem.temp,
          humidity: forecastItem.rh,
          wind: forecastItem.wind_spd,
          cloudiness: forecastItem.clouds,
          pressure: forecastItem.pres
        };
      });
    });
  } 

  daysForecast(city,country): Observable<DaysForecastItem[]>{
    const params = new HttpParams()
    .set('city', city)
    .set('country', country)
    .set('key', '7fddb2fc6bae42a396f121c7bd341832');
    return this.http.get('https://api.weatherbit.io/v2.0/forecast/daily', {params})
    .map(data=>{
      let forecastItemList = data["data"];
      return forecastItemList.map(function(forecastItem:any) {        
        return {  
          day:forecastItem.datetime,          
          temperatureMax: forecastItem.max_temp,
          temperatureMin: forecastItem.min_temp,
          humidity: forecastItem.rh,
          windAverage: forecastItem.wind_spd,
          windGust: forecastItem.wind_gust_spd, 
          pressure: forecastItem.pres
        };
      });
    });
  } 

}