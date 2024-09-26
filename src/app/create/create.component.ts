import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  createForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      fname: [
        '',
        [
          Validators.required,
          Validators.pattern('[A-Za-zs]+$'),
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      lname: [
        '',
        [
          Validators.required,
          Validators.pattern('[A-Za-zs]+$'),
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        ],
      ],
      age: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    });
  }

  onSubmit() {
    if (this.createForm.valid) {
      console.log(this.createForm.value);
    } else {
      console.log('Form not submitted');
    }
  }
}
