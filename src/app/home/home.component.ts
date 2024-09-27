import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmpTypes } from '../EmployeeTypes';
import { Employees } from '../EmployeeList';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  newEmp: EmpTypes[] = localStorage.getItem('employees')
    ? JSON.parse(localStorage.getItem('employees')!)
    : [];
  capitalizeWord = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // capitalizeEachWord = (str: string) => {
  //   return str
  //     .split(' ')
  //     .map((word) => this.capitalizeWord(word))
  //     .join(' ');
  // };
}
