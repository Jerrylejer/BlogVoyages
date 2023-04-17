import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreTripsComponent } from './more-trips.component';

describe('MoreTripsComponent', () => {
  let component: MoreTripsComponent;
  let fixture: ComponentFixture<MoreTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreTripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
