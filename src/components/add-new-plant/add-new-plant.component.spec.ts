import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPlantComponent } from './add-new-plant.component';

describe('AddNewPlantComponent', () => {
  let component: AddNewPlantComponent;
  let fixture: ComponentFixture<AddNewPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewPlantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
