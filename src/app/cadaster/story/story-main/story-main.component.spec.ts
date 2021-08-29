import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMainComponent } from './story-main.component';

describe('StoryMainComponent', () => {
  let component: StoryMainComponent;
  let fixture: ComponentFixture<StoryMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
