import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldDashboardComponent } from './world-dashboard.component';

describe('WorldDashboardComponent', () => {
  let component: WorldDashboardComponent;
  let fixture: ComponentFixture<WorldDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
