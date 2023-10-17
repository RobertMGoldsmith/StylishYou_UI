import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandResultsComponent } from './brand-results.component';

describe('BrandResultsComponent', () => {
  let component: BrandResultsComponent;
  let fixture: ComponentFixture<BrandResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandResultsComponent]
    });
    fixture = TestBed.createComponent(BrandResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
