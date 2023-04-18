import { Component } from '@angular/core';
import { ARTICLES, Iarticle } from 'src/app/mock/Article';

@Component({
  selector: 'app-homepage-top-link',
  templateUrl: './homepage-top-link.component.html',
  styleUrls: ['./homepage-top-link.component.css']
})
export class HomepageTopLinkComponent {

  topArticles: Iarticle[] = ARTICLES;
  topArticle!: Iarticle;

  ngOnInit() {
    console.log(this.topArticles[0].city)
  }

}
