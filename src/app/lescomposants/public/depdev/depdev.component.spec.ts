import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepdevComponent } from './depdev.component';

describe('DepdevComponent', () => {
  let component: DepdevComponent;
  let fixture: ComponentFixture<DepdevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepdevComponent]
    });
    fixture = TestBed.createComponent(DepdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
