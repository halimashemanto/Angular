import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployee } from './all-employee';

describe('AllEmployee', () => {
  let component: AllEmployee;
  let fixture: ComponentFixture<AllEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllEmployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
