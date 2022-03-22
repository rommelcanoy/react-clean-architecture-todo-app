import Todo from "../entities/Todo"
import TodoRepository from "../repositories/TodoRepository"

// export default class TodoServiceImpl {
//   todoRepo: TodoRepository

//   constructor(todoRepo: TodoRepository) {
//     this.todoRepo = todoRepo
//   }

//   GetTodo(): Promise<Todo[]> {
//     return this.todoRepo.GetTodo()
//   }
// }

export default class TodoServiceImpl {
  todoRepo: TodoRepository

  constructor(todoRepo: TodoRepository) {
    this.todoRepo = todoRepo
  }

  // async GetTodo(): Promise<Todo[]> {
  //   return this.todoRepo.GetTodo()
  // }
  GetTodo() {
    return this.todoRepo.GetTodo()
  }

  // AddTodo() {
  //   return this.todoRepo.AddTodo()
  // }
}

