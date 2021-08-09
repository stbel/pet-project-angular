import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactMainComponent } from './artifact-main.component';

describe('ArtifactMainComponent', () => {
  let component: ArtifactMainComponent;
  let fixture: ComponentFixture<ArtifactMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtifactMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
