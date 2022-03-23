import Todo from "../entities/Todo"
import TodoRepository from "../repositories/TodoRepository"

export default class TodoServiceImpl {
  todoRepo: TodoRepository

  constructor(todoRepo: TodoRepository) {
    this.todoRepo = todoRepo
  }

  GetTodo(): Array<Todo> {
    return this.todoRepo.GetTodo()
  }


}

