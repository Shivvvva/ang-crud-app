import { v4 as uuid } from 'uuid';

export class EmpTypes {
  id: string;
  fName: string;
  lName: string;
  age: number;
  email: string;

  constructor() {
    this.id = uuid().slice(0, 8);
    this.fName = '';
    this.lName = '';
    this.age = 0;
    this.email = '';
  }
}
