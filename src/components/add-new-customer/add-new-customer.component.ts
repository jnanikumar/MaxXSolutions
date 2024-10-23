import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-add-new-customer',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule],
  templateUrl: './add-new-customer.component.html',
  styleUrl: './add-new-customer.component.scss'
})
export class AddNewCustomerComponent {

}
