import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceptionist } from './add-receptionist';

describe('AddReceptionist', () => {
  let component: AddReceptionist;
  let fixture: ComponentFixture<AddReceptionist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddReceptionist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReceptionist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
