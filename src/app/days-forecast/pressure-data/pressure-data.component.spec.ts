import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureDataComponent } from './pressure-data.component';

describe('PressureDataComponent', () => {
  let component: PressureDataComponent;
  let fixture: ComponentFixture<PressureDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressureDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
