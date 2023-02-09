import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Click1Component } from './click1.component';

describe('Click1Component', () => {
  let component: Click1Component;
  let fixture: ComponentFixture<Click1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Click1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Click1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
