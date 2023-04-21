import { Component } from '@angular/core';
import {  WeatherServiceService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cityTemp!: number;
  cityName!: string;

  constructor(private weatherService: WeatherServiceService) {}

  //todo Visualisation globale des datas de l'API
  // ngOnInit() {
  //   console.log(this.weatherService.getLocation("tirana").subscribe((next) => console.log(next)))
  // }

  ngOnInit() {
    this.weatherService.getLocation("tirana").subscribe((next) => {
      this.cityTemp! = next.days[0].temp;
      this.cityName! = next.address;
      console.log(next)
    })
  }

}
