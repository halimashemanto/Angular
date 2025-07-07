import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReceptionist } from './view-receptionist';

describe('ViewReceptionist', () => {
  let component: ViewReceptionist;
  let fixture: ComponentFixture<ViewReceptionist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewReceptionist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReceptionist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
