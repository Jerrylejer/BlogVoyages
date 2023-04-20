import { Component } from '@angular/core';
import { ARTICLES, Iarticle } from 'src/app/mock/Article';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  // Il faut que je récupère l'article et le passe en @input dans les composants enfants
  articles: Iarticle[] = ARTICLES;
  article!: Iarticle;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getArticleById();
  }

  //! INDISPENSABLE DANS LE PARENT
  getArticleById() {
    // Je tiens compte du params de l'url, ici l'ID
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Je recherche dans le mock l'objet en relation avec l'ID capté dans l'url
    const articleById = this.articles.find((article) => article.id === id);
    // Si correspondance, j'en donne la valeur à ma props article!
    if(articleById) {
      this.article! = articleById
    }
  }
}
