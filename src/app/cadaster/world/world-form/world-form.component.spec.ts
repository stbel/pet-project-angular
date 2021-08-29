import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldFormComponent } from './world-form.component';

describe('WorldFormComponent', () => {
  let component: WorldFormComponent;
  let fixture: ComponentFixture<WorldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
