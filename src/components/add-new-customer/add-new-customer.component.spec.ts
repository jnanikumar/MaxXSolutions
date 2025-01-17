import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCustomerComponent } from './add-new-customer.component';

describe('AddNewCustomerComponent', () => {
  let component: AddNewCustomerComponent;
  let fixture: ComponentFixture<AddNewCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
