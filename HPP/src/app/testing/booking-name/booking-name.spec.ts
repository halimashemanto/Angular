import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingName } from './booking-name';

describe('BookingName', () => {
  let component: BookingName;
  let fixture: ComponentFixture<BookingName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
