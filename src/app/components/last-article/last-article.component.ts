import { Component, Input } from '@angular/core';
import { ARTICLES, Iarticle } from 'src/app/mock/Article';


@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.css']
})
export class LastArticleComponent {

  lastArticles: Iarticle[] = ARTICLES;
  lastArticle!: Iarticle;

  @Input() country!: string;
  @Input() city!: string;
  @Input() departureDate!: string;
  @Input() returnDate!: string;
  @Input() mainImage!: string;

}
