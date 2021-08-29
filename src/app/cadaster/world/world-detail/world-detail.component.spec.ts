import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldDetailComponent } from './world-detail.component';

describe('WorldDetailComponent', () => {
  let component: WorldDetailComponent;
  let fixture: ComponentFixture<WorldDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
