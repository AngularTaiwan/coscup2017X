import { HttpClient } from '@angular/common/http';
import { Todo } from './../todo';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }
  /// TODO: CRUD
  
  // C
  addTodos(todo): Observable<Todo[]> {
    return this.httpClient.post<Todo[]>('/api/todos', todo);
  }

  // R
  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>("/api/todos");
  }

  // U
  editTodo(id, todo): Observable<Todo[]> {
    return this.httpClient.put<Todo[]>(`/api/todos/${id}`, todo);
  }

  // D
  deleteTodo(id): Observable<Todo[]> {
    return this.httpClient.delete<Todo[]>(`/api/todos/${id}`)
  }

}
