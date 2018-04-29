import { TestBed, inject } from '@angular/core/testing';

import { CityWeatherDataService } from './city-weather-data.service';

describe('CityWeatherDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityWeatherDataService]
    });
  });

  it('should be created', inject([CityWeatherDataService], (service: CityWeatherDataService) => {
    expect(service).toBeTruthy();
  }));
});
