import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderadminComponent } from './headeradmin.component';

describe('HeaderadminComponent', () => {
  let component: HeaderadminComponent;
  let fixture: ComponentFixture<HeaderadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderadminComponent]
    });
    fixture = TestBed.createComponent(HeaderadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
