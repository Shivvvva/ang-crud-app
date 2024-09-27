import { Employees } from './../EmployeeList';
import { EmpTypes } from './../EmployeeTypes';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  createForm: FormGroup;
  updatedEmp: EmpTypes[] = [];
  empObj: EmpTypes = new EmpTypes();

  constructor(private fb: FormBuilder, private router: Router) {
    const oldData = localStorage.getItem('employees');
    if (oldData != null) {
      const parseData = JSON.parse(oldData);
      this.updatedEmp = parseData;
    }
    this.createForm = this.fb.group({
      id: this.empObj.id,
      fName: [
        this.empObj.fName,
        [
          Validators.required,
          Validators.pattern('[A-Za-zs]+$'),
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      lName: [
        this.empObj.lName,
        [
          Validators.required,
          Validators.pattern('[A-Za-zs]+$'),
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      email: [
        this.empObj.email,
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        ],
      ],
      age: [
        this.empObj.age,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
    });
  }

  onSubmit() {
    const oldData = localStorage.getItem('employees');
    if (oldData != null) {
      const parseData = JSON.parse(oldData);
      this.createForm.controls['id'].setValue(parseData.length++);
      this.updatedEmp.push(this.createForm.value);
    } else {
      this.updatedEmp.push(this.createForm.value);
    }
    localStorage.setItem('employees', JSON.stringify(this.updatedEmp));
    Employees.push(this.createForm.value);
    this.router.navigate(['/']);
  }
}
