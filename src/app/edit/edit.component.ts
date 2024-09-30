import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
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
  router = new Router();
  editForm: FormGroup;
  editEmp: EmpTypes[] = [];
  empObj: EmpTypes = new EmpTypes();

  constructor(private fb: FormBuilder) {
    const oldData = localStorage.getItem('employees');
    if (oldData != null) {
      const parseData = JSON.parse(oldData);
      this.editEmp = parseData;
    }

    this.editForm = this.fb.group({
      fName: [
        localStorage.getItem('fName'),
        [
          Validators.required,
          Validators.pattern('[A-Za-zs]+$'),
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],

      lName: [
        localStorage.getItem('lName'),
        [
          Validators.required,
          Validators.pattern('[A-Za-zs]+$'),
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],

      email: [
        localStorage.getItem('email'),
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        ],
      ],

      age: [
        localStorage.getItem('age'),
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
    });
  }

  onEdit = () => {
    const index = this.editEmp.findIndex(
      (emp) => emp.email === localStorage.getItem('email')
    );
    if (index !== -1) {
      this.editEmp[index].fName = this.editForm.get('fName')?.value;
      this.editEmp[index].lName = this.editForm.get('lName')?.value;
      this.editEmp[index].age = this.editForm.get('age')?.value;
      this.editEmp[index].email = this.editForm.get('email')?.value;
      localStorage.setItem('employees', JSON.stringify(this.editEmp));
    }
    localStorage.removeItem('id');
    localStorage.removeItem('fName');
    localStorage.removeItem('lName');
    localStorage.removeItem('age');
    localStorage.removeItem('email');

    this.router.navigate(['/']);
  };
}
