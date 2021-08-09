import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonageFormComponent } from './personage-form.component';

describe('PersonageFormComponent', () => {
  let component: PersonageFormComponent;
  let fixture: ComponentFixture<PersonageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
