import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurOpinionComponent } from './our-opinion.component';

describe('OurOpinionComponent', () => {
  let component: OurOpinionComponent;
  let fixture: ComponentFixture<OurOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurOpinionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
