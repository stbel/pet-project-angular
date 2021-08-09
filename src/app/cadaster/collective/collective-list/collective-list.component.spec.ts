import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveListComponent } from './collective-list.component';

describe('CollectiveListComponent', () => {
  let component: CollectiveListComponent;
  let fixture: ComponentFixture<CollectiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectiveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
