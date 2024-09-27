import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmpTypes } from '../EmployeeTypes';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  editForm: FormGroup;
  empObj: EmpTypes = new EmpTypes();

  constructor() {
    this.editForm = new FormGroup({
      fname: new FormControl(this.empObj.fName, [
        Validators.required,
        Validators.pattern('[A-Za-zs]+$'),
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      lname: new FormControl(this.empObj.lName, [
        Validators.required,
        Validators.pattern('[A-Za-zs]+$'),
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      email: new FormControl(this.empObj.email, [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
      ]),
      age: new FormControl(this.empObj.age, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
    });
  }

  onSubmit() {
    console.log(this.editForm.valid);
  }
}
