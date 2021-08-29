import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonageDashboardComponent } from './personage-dashboard.component';

describe('PersonageDashboardComponent', () => {
  let component: PersonageDashboardComponent;
  let fixture: ComponentFixture<PersonageDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonageDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
