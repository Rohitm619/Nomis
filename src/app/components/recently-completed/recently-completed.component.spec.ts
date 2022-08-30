import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyCompletedComponent } from './recently-completed.component';

describe('RecentlyCompletedComponent', () => {
  let component: RecentlyCompletedComponent;
  let fixture: ComponentFixture<RecentlyCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyCompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
