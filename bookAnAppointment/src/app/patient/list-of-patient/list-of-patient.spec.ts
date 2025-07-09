import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPatient } from './list-of-patient';

describe('ListOfPatient', () => {
  let component: ListOfPatient;
  let fixture: ComponentFixture<ListOfPatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfPatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfPatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
