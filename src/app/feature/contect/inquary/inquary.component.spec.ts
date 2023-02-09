import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquaryComponent } from './inquary.component';

describe('InquaryComponent', () => {
  let component: InquaryComponent;
  let fixture: ComponentFixture<InquaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
