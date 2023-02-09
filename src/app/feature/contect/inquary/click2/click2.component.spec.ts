import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Click2Component } from './click2.component';

describe('Click2Component', () => {
  let component: Click2Component;
  let fixture: ComponentFixture<Click2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Click2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Click2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
