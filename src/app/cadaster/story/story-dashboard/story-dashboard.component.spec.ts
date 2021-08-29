import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDashboardComponent } from './story-dashboard.component';

describe('StoryDashboardComponent', () => {
  let component: StoryDashboardComponent;
  let fixture: ComponentFixture<StoryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
