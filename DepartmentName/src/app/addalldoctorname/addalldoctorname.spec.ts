import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addalldoctorname } from './addalldoctorname';

describe('Addalldoctorname', () => {
  let component: Addalldoctorname;
  let fixture: ComponentFixture<Addalldoctorname>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addalldoctorname]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addalldoctorname);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
