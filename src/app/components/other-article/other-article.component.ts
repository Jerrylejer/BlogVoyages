import { Component } from '@angular/core';
import { ARTICLES, Iarticle } from 'src/app/mock/Article';

@Component({
  selector: 'app-other-article',
  templateUrl: './other-article.component.html',
  styleUrls: ['./other-article.component.css']
})
export class OtherArticleComponent {

  otherArticles: Iarticle[] = ARTICLES;
  otherArticle!: Iarticle;

}
