import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmpTypes } from '../EmployeeTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  router = new Router();
  handleEdit = (data: EmpTypes) => {
    localStorage.setItem('id', data.id.toString());
    localStorage.setItem('fName', data.fName);
    localStorage.setItem('lName', data.lName);
    localStorage.setItem('age', data.age.toString());
    localStorage.setItem('email', data.email);
    this.router.navigate(['/edit']);
  };

  handleDelete(id: string) {
    const index = this.newEmp.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.newEmp.splice(index, 1);
      localStorage.setItem('employees', JSON.stringify(this.newEmp));
    }
  }

  newEmp: EmpTypes[] = localStorage.getItem('employees')
    ? JSON.parse(localStorage.getItem('employees')!)
    : [];

  capitalizeWord = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
}
