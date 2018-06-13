import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public foo;
  public todos;
  a = 0.259;
  todo;
  public booleana;
  constructor() {
    this.foo = 'Hola';
    this.todo = {'text': 'valor inicial'};
    this.booleana = true;
  }

  ngOnInit() {
    this.todos = [
      {text: 'hacer la compra'},
      {text: 'revisar el coche'}
    ];
  }
  addTodo() {
    // console.log(this);
    const mitodo = {text: this.todo.text};
    if (mitodo.text !== '') {
      this.todos.push(mitodo);
      this.todo.text = '';
    }
  }
  deleteTodo(texto) {
    for ( let i = 0; i < this.todos.length; i++) {
      const todo = this.todos[i];
      if (todo.text === texto) {
        this.todos.splice(i, 1);
      }
    }
  }

}
