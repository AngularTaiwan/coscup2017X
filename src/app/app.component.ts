import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos:any[] = [];
  inputHint:string = 'Input your todos';
  todo:string;

  addTodos(todoInput:HTMLInputElement){
    this.todos.push({content:this.todo, done:false});
    todoInput.value = '';
  }

  change(event:string){
    console.log(event);
  }
}
