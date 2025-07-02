import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBook } from './view-book';

describe('ViewBook', () => {
  let component: ViewBook;
  let fixture: ComponentFixture<ViewBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
