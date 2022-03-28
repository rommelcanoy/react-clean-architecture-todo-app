import Todo from "../entities/Todo"

export default interface TodoRepository {
    // GetTodo(): any
    GetTodo(): Promise<Todo[]>
    AddTodo(todo: any): Promise<Todo[]>
    UpdateTodo(todo: any): Promise<Todo[]>
    DeleteTodo(id: any): Promise<Todo[]>
    ToggleComplete(todo: any): Promise<Todo[]>
    // SetTodo(todo: Array<Todo>)
}