import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonageDetailComponent } from './personage-detail.component';

describe('PersonageDetailComponent', () => {
  let component: PersonageDetailComponent;
  let fixture: ComponentFixture<PersonageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
