import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldMainComponent } from './world-main.component';

describe('WorldMainComponent', () => {
  let component: WorldMainComponent;
  let fixture: ComponentFixture<WorldMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
