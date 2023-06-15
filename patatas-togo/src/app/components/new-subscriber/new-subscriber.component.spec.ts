import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubscriberComponent } from './new-subscriber.component';

describe('NewSubscriberComponent', () => {
  let component: NewSubscriberComponent;
  let fixture: ComponentFixture<NewSubscriberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSubscriberComponent]
    });
    fixture = TestBed.createComponent(NewSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
