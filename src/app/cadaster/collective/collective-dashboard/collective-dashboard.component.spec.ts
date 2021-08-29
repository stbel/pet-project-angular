import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveDashboardComponent } from './collective-dashboard.component';

describe('CollectiveDashboardComponent', () => {
  let component: CollectiveDashboardComponent;
  let fixture: ComponentFixture<CollectiveDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectiveDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
