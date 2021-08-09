import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactDetailComponent } from './artifact-detail.component';

describe('ArtifactDetailComponent', () => {
  let component: ArtifactDetailComponent;
  let fixture: ComponentFixture<ArtifactDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtifactDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
