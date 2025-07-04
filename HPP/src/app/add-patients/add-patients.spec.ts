import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatients } from './add-patients';

describe('AddPatients', () => {
  let component: AddPatients;
  let fixture: ComponentFixture<AddPatients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPatients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
