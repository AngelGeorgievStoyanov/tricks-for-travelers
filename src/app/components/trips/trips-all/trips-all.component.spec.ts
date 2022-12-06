import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsAllComponent } from './trips-all.component';

describe('TripsAllComponent', () => {
  let component: TripsAllComponent;
  let fixture: ComponentFixture<TripsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
