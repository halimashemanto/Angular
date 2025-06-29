import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewalldoctorname } from './viewalldoctorname';

describe('Viewalldoctorname', () => {
  let component: Viewalldoctorname;
  let fixture: ComponentFixture<Viewalldoctorname>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewalldoctorname]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewalldoctorname);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
