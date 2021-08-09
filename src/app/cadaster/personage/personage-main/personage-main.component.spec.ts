import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonageMainComponent } from './personage-main.component';

describe('PersonageMainComponent', () => {
  let component: PersonageMainComponent;
  let fixture: ComponentFixture<PersonageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonageMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
