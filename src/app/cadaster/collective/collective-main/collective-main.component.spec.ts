import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveMainComponent } from './collective-main.component';

describe('CollectiveMainComponent', () => {
  let component: CollectiveMainComponent;
  let fixture: ComponentFixture<CollectiveMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectiveMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiveMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
