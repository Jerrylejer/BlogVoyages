import { Component } from '@angular/core';
import { ARTICLES, Iarticle } from 'src/app/mock/Article';


@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.css']
})
export class LastArticleComponent {

  lastArticles: Iarticle[] = ARTICLES;
  lastArticle!: Iarticle;

}
