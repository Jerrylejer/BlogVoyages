import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageArticleGalleryComponent } from './image-article-gallery.component';

describe('ImageArticleGalleryComponent', () => {
  let component: ImageArticleGalleryComponent;
  let fixture: ComponentFixture<ImageArticleGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageArticleGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageArticleGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
