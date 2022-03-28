import Todo from "../entities/Todo"
import TodoRepository from "../repositories/TodoRepository"

export default class TodoServiceImpl {
  todoRepo: TodoRepository

  constructor(todoRepo: TodoRepository) {
    this.todoRepo = todoRepo
  }

  GetTodo(): Promise<Todo[]> {
    return this.todoRepo.GetTodo()
  }

  async AddTodo(todo: any): Promise<Todo[]> {
    return this.todoRepo.AddTodo(todo)
  }

  async UpdateTodo(todo: any): Promise<Todo[]> {
    return this.todoRepo.UpdateTodo(todo)
  }

  async DeleteTodo(id: any): Promise<Todo[]> {
    return this.todoRepo.DeleteTodo(id)
  }

  async ToggleComplete(todo: any): Promise<Todo[]> {
    return this.todoRepo.ToggleComplete(todo)
  }



  // SetTodo(todo: Array<Todo>) {
  //   console.log('set todo service');
  //   return this.todoRepo.SetTodo(todo)
  // }

}

