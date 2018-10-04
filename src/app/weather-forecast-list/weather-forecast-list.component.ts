import { Component, OnInit, Input } from '@angular/core';
import { weatherBit } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';

import { CityDetails } from '../models/city-details';
import { WeatherForecast } from '../models/weather-forecast';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  @Input() searchText: string;
  cityDetails: CityDetails;
  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    this.weatherBitUrl = ``;
    this.cityDetails = new CityDetails();
  }

  getWeather() {
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    //subscribe to weatherbit forecase results here
    this.weatherForecasts=[];

    this.http.get(this.weatherBitUrl).subscribe((results: any) => {
      console.log('Weather Forecast....');
      console.log(results);
      console.log('Weather Forecast....');
      this.cityDetails = new CityDetails(results['city_name'], results['state_code']);
      results.data.forEach(result => {
        this.weatherForecasts.push(
          new WeatherForecast(result['datetime'], result['max_temp'], result['min_temp']));
      });
    });
  }

  ngOnInit() {
  }

}
