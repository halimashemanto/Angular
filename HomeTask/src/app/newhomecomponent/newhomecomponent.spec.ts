import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newhomecomponent } from './newhomecomponent';

describe('Newhomecomponent', () => {
  let component: Newhomecomponent;
  let fixture: ComponentFixture<Newhomecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Newhomecomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newhomecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
