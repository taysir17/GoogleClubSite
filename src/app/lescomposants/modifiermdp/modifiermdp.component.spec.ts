import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermdpComponent } from './modifiermdp.component';

describe('ModifiermdpComponent', () => {
  let component: ModifiermdpComponent;
  let fixture: ComponentFixture<ModifiermdpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifiermdpComponent]
    });
    fixture = TestBed.createComponent(ModifiermdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
