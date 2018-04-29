import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CityWeatherDataService } from './shared/city-weather-data.service';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { HumidityDataComponent } from './days-forecast/humidity-data/humidity-data.component';
import { TemperatureDataComponent } from './days-forecast/temperature-data/temperature-data.component';
import { PressureDataComponent } from './days-forecast/pressure-data/pressure-data.component';
import { WindDataComponent } from './days-forecast/wind-data/wind-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    DaysForecastComponent,
    TabsComponent,
    TabComponent,
    HumidityDataComponent,
    TemperatureDataComponent,
    PressureDataComponent,
    WindDataComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [HttpClientModule, CityWeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


