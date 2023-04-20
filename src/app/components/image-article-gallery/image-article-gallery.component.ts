import { Component, Input } from '@angular/core';
import { ARTICLES, Iarticle, Igallery } from 'src/app/mock/Article';


@Component({
  selector: 'app-image-article-gallery',
  templateUrl: './image-article-gallery.component.html',
  styleUrls: ['./image-article-gallery.component.css']
})
export class ImageArticleGalleryComponent {

  otherPictures: Iarticle[] = ARTICLES;
  otherPicture?: Iarticle;

  @Input() gallery!: Igallery[];
}
