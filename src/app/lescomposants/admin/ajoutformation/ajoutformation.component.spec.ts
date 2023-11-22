import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutformationComponent } from './ajoutformation.component';

describe('AjoutformationComponent', () => {
  let component: AjoutformationComponent;
  let fixture: ComponentFixture<AjoutformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutformationComponent]
    });
    fixture = TestBed.createComponent(AjoutformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
