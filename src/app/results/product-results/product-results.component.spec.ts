import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductResultsComponent } from './product-results.component';

describe('ProductResultsComponent', () => {
  let component: ProductResultsComponent;
  let fixture: ComponentFixture<ProductResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductResultsComponent]
    });
    fixture = TestBed.createComponent(ProductResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
