import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRequiredComponent } from './alert-required.component';

describe('AlertRequiredComponent', () => {
  let component: AlertRequiredComponent;
  let fixture: ComponentFixture<AlertRequiredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlertRequiredComponent]
    });
    fixture = TestBed.createComponent(AlertRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
