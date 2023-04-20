import { Component, Input } from '@angular/core';
import { ARTICLES, Iadvices, Iarticle, InegativePoints, IpositivePoints } from 'src/app/mock/Article';

@Component({
  selector: 'app-our-opinion',
  templateUrl: './our-opinion.component.html',
  styleUrls: ['./our-opinion.component.css']
})
export class OurOpinionComponent {

  ourOpinions: Iarticle[] = ARTICLES;
  ourOpinion!: Iarticle;

  @Input() positivePoints!: IpositivePoints[];
  @Input() negativePoints!: InegativePoints[];
  @Input() advices!: Iadvices[];

}
