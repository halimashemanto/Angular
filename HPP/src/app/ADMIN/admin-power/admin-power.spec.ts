import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPower } from './admin-power';

describe('AdminPower', () => {
  let component: AdminPower;
  let fixture: ComponentFixture<AdminPower>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPower]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPower);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
