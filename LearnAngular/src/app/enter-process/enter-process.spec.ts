import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterProcess } from './enter-process';

describe('EnterProcess', () => {
  let component: EnterProcess;
  let fixture: ComponentFixture<EnterProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterProcess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterProcess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
