import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-add-new-plant',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule],
  templateUrl: './add-new-plant.component.html',
  styleUrl: './add-new-plant.component.scss'
})
export class AddNewPlantComponent {

}
