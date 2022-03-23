import Todo from "../entities/Todo"

export default interface TodoRepository {
    GetTodo(): Array<Todo>
    SetTodo(todo: Array<Todo>)
}