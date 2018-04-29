import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityDataComponent } from './humidity-data.component';

describe('HumidityDataComponent', () => {
  let component: HumidityDataComponent;
  let fixture: ComponentFixture<HumidityDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumidityDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
