import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ARTICLES, Iarticle } from './mock/Article';
import { IlocationResponse, WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = environment.title;

  datas: Iarticle[] = ARTICLES;
  data!: Iarticle;
  cityInfo!: IlocationResponse;


  constructor(private weatherService: WeatherServiceService) {}

  //todo Visualisation globale des datas de l'API
  // ngOnInit() {
  //   console.log(this.weatherService.getLocation("tirana").subscribe((next) => console.log(next)))
  // }

  ngOnInit() {
    this.weatherService.getLocation("tirana").subscribe((next) => {
      this.cityInfo! = next;
    })
  }
}
