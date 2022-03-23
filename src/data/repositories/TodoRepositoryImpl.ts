import Todo from "../../domain/entities/Todo"
import TodoRepository from "../../domain/repositories/TodoRepository"

export default class TodoRepositoryImpl implements TodoRepository {

    getTodo = JSON.parse(localStorage.getItem('state'));

    GetTodo(): Array<Todo> {
        return this.getTodo
    }

}
