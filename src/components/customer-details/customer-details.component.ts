import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent {

  customerDetails:any=[{
    id:1,
    name:"Anil Kumar",
    location:"chennai",
    phone:"9390379300"
  },{
    id:2,
    name:"Dev",
    location:"pallavaram",
    phone:"9382848403"
  },{
    id:3,
    name:"Moohan",
    location:"chennai",
    phone:"8374754632"
  }

]
}
