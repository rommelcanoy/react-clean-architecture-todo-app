import Todo from "../entities/Todo"
import TodoRepository from "../repositories/TodoRepository"

export default class TodoServiceImpl {
  todoRepo: TodoRepository

  constructor(todoRepo: TodoRepository) {
    this.todoRepo = todoRepo
  }

  GetTodo(): Array<Todo> {
    console.log('get todo service');
    return this.todoRepo.GetTodo()
  }

  SetTodo(todo: Array<Todo>) {
    console.log('set todo service');
    return this.todoRepo.SetTodo(todo)
  }

}

