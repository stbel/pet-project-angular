import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceMainComponent } from './place-main.component';

describe('PlaceMainComponent', () => {
  let component: PlaceMainComponent;
  let fixture: ComponentFixture<PlaceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
