import { Component, Input } from '@angular/core';
import { ARTICLES, Iarticle } from 'src/app/mock/Article';
import { IlocationResponse } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  datas: Iarticle[] = ARTICLES;
  data!: Iarticle;

  @Input() temp!: IlocationResponse;

}
