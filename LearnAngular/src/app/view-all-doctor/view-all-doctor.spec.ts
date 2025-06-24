import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDoctor } from './view-all-doctor';

describe('ViewAllDoctor', () => {
  let component: ViewAllDoctor;
  let fixture: ComponentFixture<ViewAllDoctor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllDoctor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllDoctor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
