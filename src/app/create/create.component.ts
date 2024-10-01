import { EmpTypes } from './../EmployeeTypes';
import { CommonModule } from '@angular/common';
import { v4 as uuid } from 'uuid';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
      id: uuid().slice(0, 8),

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
    this.empObj.fName = this.createForm.get('fName')?.value;
    this.empObj.lName = this.createForm.get('lName')?.value;
    this.empObj.age = this.createForm.get('age')?.value;
    this.empObj.email = this.createForm.get('email')?.value;
    this.updatedEmp.push(this.empObj);
    localStorage.setItem('employees', JSON.stringify(this.updatedEmp));
    this.router.navigate(['/']);

    Swal.fire({
      title: 'Submitted!',
      text: 'Your form has been submitted successfully.',
      icon: 'success',
    });
  }
}
