import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepmediaComponent } from './depmedia.component';

describe('DepmediaComponent', () => {
  let component: DepmediaComponent;
  let fixture: ComponentFixture<DepmediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepmediaComponent]
    });
    fixture = TestBed.createComponent(DepmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
