import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreArticleLinksComponent } from './more-article-links.component';

describe('MoreArticleLinksComponent', () => {
  let component: MoreArticleLinksComponent;
  let fixture: ComponentFixture<MoreArticleLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreArticleLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreArticleLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
