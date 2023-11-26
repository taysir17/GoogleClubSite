import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationadminComponent } from './formationadmin.component';

describe('FormationadminComponent', () => {
  let component: FormationadminComponent;
  let fixture: ComponentFixture<FormationadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationadminComponent]
    });
    fixture = TestBed.createComponent(FormationadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
