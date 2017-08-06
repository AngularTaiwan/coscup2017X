import { DataService } from "./services/data.service";
import { TodoDoneDirective } from "./todo-done.directive";
import { Todo } from "./todo";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/mergeMap";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  inputHint: string = "Input your todos";
  todo: string;
  isEditing = false;
  filter = "all";

  constructor(
    private httpClient: HttpClient,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.httpClient
      .get<Todo[]>("/api/todos")
      .subscribe(todos => (this.todos = todos));
  }

  addTodos(todoInput: HTMLInputElement) {
    // this.todos.push({
    //   id: this.todos.length + 1,
    //   content: this.todo,
    //   done: false });

    const todo: Todo = {
      id: this.todos.length + 1,
      content: this.todo,
      done: false,
      isEditing: false
    };

    // this.dataService.addTodos(todo).subscribe(() => {
    //   this.dataService.getTodos().subscribe(todos => (this.todos = todos));
    //   todoInput.value = "";
    // });

    this.dataService.addTodos(todo).mergeMap(rsp=>{
      return this.dataService.getTodos();
    }).subscribe(getTodosRSP => {
      this.todos = getTodosRSP;
      todoInput.value = "";
    })
  }

  change(event: string) {
    console.log(event);
  }

  setFilterCondition(condition) {
    this.filter = condition;
  }

  toggleAll(toggleInput: HTMLInputElement) {
    this.todos = this.todos.map(todo => {
      todo.done = toggleInput.checked;
      return todo;
    });
  }

  removeTodo(id: number) {
    //this.todos = this.todos.filter(todo => todo.id != id);

    // this.httpClient.delete(`/api/todos/${id}`).subscribe();
    this.dataService.deleteTodo(id).mergeMap(deleteSuccess=>{
      return this.dataService.getTodos();
    }).subscribe(todos => (this.todos = todos));

  }

  goEdit(todo: Todo) {
    console.log('dbclick');
    todo.isEditing = true;
  }

  updateTodo(todo: Todo){
    todo.isEditing = false;    
    // this.todos[todo.id] = todo; 
    this.dataService.editTodo(todo.id, todo).mergeMap(success=>{
      console.log(`%cupdate`, 'font-size: 20px; color: orange');
      return this.dataService.getTodos();
    }).subscribe(getRSP => {
      this.todos = getRSP;
    });
  }
}
