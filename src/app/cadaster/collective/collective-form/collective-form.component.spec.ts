import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveFormComponent } from './collective-form.component';

describe('CollectiveFormComponent', () => {
  let component: CollectiveFormComponent;
  let fixture: ComponentFixture<CollectiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
