import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListformationComponent } from './listformation.component';

describe('ListformationComponent', () => {
  let component: ListformationComponent;
  let fixture: ComponentFixture<ListformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListformationComponent]
    });
    fixture = TestBed.createComponent(ListformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
