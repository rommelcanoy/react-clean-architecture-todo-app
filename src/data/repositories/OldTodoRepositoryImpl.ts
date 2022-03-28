import Todo from "../../domain/entities/Todo"
import TodoRepository from "../../domain/repositories/TodoRepository"

export default class TodoRepositoryImpl implements TodoRepository {

    GetTodo(): Array<Todo> {
        console.log('get todo implementation')
        return JSON.parse(localStorage.getItem('state'));
    }

    SetTodo(todo: Array<Todo>) {
        console.log('set todo implementation')
        localStorage.setItem('state', JSON.stringify(todo));
    }

}
