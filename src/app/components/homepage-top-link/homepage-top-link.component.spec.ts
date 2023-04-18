import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTopLinkComponent } from './homepage-top-link.component';

describe('HomepageTopLinkComponent', () => {
  let component: HomepageTopLinkComponent;
  let fixture: ComponentFixture<HomepageTopLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageTopLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageTopLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
