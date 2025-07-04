import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLab } from './add-lab';

describe('AddLab', () => {
  let component: AddLab;
  let fixture: ComponentFixture<AddLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
