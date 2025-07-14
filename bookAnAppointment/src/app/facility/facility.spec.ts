import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Facility } from './facility';

describe('Facility', () => {
  let component: Facility;
  let fixture: ComponentFixture<Facility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Facility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Facility);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
