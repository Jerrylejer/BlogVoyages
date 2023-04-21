import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ARTICLES, Iarticle } from './mock/Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = environment.title;

  datas: Iarticle[] = ARTICLES;
  data!: Iarticle;

}
