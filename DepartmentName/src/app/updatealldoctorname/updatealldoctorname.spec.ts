import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatealldoctorname } from './updatealldoctorname';

describe('Updatealldoctorname', () => {
  let component: Updatealldoctorname;
  let fixture: ComponentFixture<Updatealldoctorname>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatealldoctorname]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatealldoctorname);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
