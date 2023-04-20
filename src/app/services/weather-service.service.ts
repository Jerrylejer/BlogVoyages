import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface IlocationResponse {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  description: string;
  days: [
    {
      temp: number;
    }
  ]
};

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  apiUrl = environment.weatherApi.url;
  apiToken = environment.weatherApi.token;

  constructor(private http: HttpClient) {}

  getLocation(city: string): Observable<IlocationResponse> {
    const url = `${this.apiUrl}/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&key=${this.apiToken}&contentType=json`;
    console.log(url);
    return this.http.get<IlocationResponse>(url);
  }

  //todo Essai sans l'Observable
  // getLocation(city: string){
  //   const url = `${this.apiUrl}/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&key=${this.apiToken}&contentType=json`;
  //   console.log(url);
  //   return this.http.get(url);
  // }
}
