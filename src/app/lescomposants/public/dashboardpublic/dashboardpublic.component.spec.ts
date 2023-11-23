import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpublicComponent } from './dashboardpublic.component';

describe('DashboardpublicComponent', () => {
  let component: DashboardpublicComponent;
  let fixture: ComponentFixture<DashboardpublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardpublicComponent]
    });
    fixture = TestBed.createComponent(DashboardpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
