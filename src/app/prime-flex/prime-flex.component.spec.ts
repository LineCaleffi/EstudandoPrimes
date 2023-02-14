import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFlexComponent } from './prime-flex.component';

describe('PrimeFlexComponent', () => {
  let component: PrimeFlexComponent;
  let fixture: ComponentFixture<PrimeFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
