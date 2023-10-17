import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderResultsComponent } from './gender-results.component';

describe('GenderResultsComponent', () => {
  let component: GenderResultsComponent;
  let fixture: ComponentFixture<GenderResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenderResultsComponent]
    });
    fixture = TestBed.createComponent(GenderResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
