import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripResumeComponent } from './trip-resume.component';

describe('TripResumeComponent', () => {
  let component: TripResumeComponent;
  let fixture: ComponentFixture<TripResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
