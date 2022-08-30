import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingInQueueComponent } from './waiting-in-queue.component';

describe('WaitingInQueueComponent', () => {
  let component: WaitingInQueueComponent;
  let fixture: ComponentFixture<WaitingInQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingInQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingInQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
