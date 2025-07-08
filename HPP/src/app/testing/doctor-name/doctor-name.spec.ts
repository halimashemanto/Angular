import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorName } from './doctor-name';

describe('DoctorName', () => {
  let component: DoctorName;
  let fixture: ComponentFixture<DoctorName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
