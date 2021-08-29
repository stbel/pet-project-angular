import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDashboardComponent } from './place-dashboard.component';

describe('PlaceDashboardComponent', () => {
  let component: PlaceDashboardComponent;
  let fixture: ComponentFixture<PlaceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
