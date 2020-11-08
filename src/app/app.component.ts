import { Component } from '@angular/core';
import { customInput, TodoModel } from './models/to-do.model';
import { userModel } from './userModel/to-doH1.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Array<TodoModel> = [
    new TodoModel(1, 'ძაღლის გასეირნება', '5ზე უნდა გავასეირნო ჩარლი'),
    new TodoModel(2, 'კატის გასეირნება', '5ზე უნდა გავასეირნო ტოტო'),
  ];
  users: Array<userModel> = [
    new userModel(1, 'gio', 30),
    new userModel(2, 'mamuka', 18),
    new userModel(3, 'zaza', 32),
  ];
  disabled = true;

}


