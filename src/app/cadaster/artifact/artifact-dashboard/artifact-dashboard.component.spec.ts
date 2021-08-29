import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactDashboardComponent } from './artifact-dashboard.component';

describe('ArtifactDashboardComponent', () => {
  let component: ArtifactDashboardComponent;
  let fixture: ComponentFixture<ArtifactDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtifactDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
