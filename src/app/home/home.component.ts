import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  capitalizeWord = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  capitalizeEachWord = (str: string) => {
    return str
      .split(' ')
      .map((word) => this.capitalizeWord(word))
      .join(' ');
  };
}
