import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReceptionist } from './update-receptionist';

describe('UpdateReceptionist', () => {
  let component: UpdateReceptionist;
  let fixture: ComponentFixture<UpdateReceptionist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateReceptionist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReceptionist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
