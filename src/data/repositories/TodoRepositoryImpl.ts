import Todo from "../../domain/entities/Todo"
import TodoRepository from "../../domain/repositories/TodoRepository"

export default class TodoRepositoryImpl implements TodoRepository {

    getTodo = JSON.parse(localStorage.getItem('state'));
    // setTodo = localStorage.setItem('state', JSON.stringify(state.list));
    // setTodo = localStorage.setItem('state', JSON.stringify(test));

    GetTodo() {
        return this.getTodo
    }

    // jsonUrl =
    //     "https://gist.githubusercontent.com/janithl/6bfbd787a0361c170ac760e8fb5ba0fd/raw/a0ffacb7c0fc21a0266371f632cf4107f80362f4/itemlist.json"

    // async GetTodo(): Promise<Todo[]> {
    //     const res = await fetch(this.jsonUrl)
    //     const jsonData = await res.json()
    //     return jsonData.map((item: Todo) => ({ id: item.id, text: item.text, completed: item.completed }))
    // }

    // async GetTodo(): Promise<Todo[]>  {
    //     return this.getTodo
    // }
}
