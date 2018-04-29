import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDataComponent } from './wind-data.component';

describe('WindDataComponent', () => {
  let component: WindDataComponent;
  let fixture: ComponentFixture<WindDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
