import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonageListComponent } from './personage-list.component';

describe('PersonageListComponent', () => {
  let component: PersonageListComponent;
  let fixture: ComponentFixture<PersonageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
