import { Component, Input } from '@angular/core';
import { ARTICLES, Iarticle } from 'src/app/mock/Article';

@Component({
  selector: 'app-trip-summary',
  templateUrl: './trip-summary.component.html',
  styleUrls: ['./trip-summary.component.css']
})
export class TripSummaryComponent {

  tripSummaries: Iarticle[] = ARTICLES;
  tripSummary!: Iarticle;

  @Input() title!: string;
  @Input() text!: string;

}
