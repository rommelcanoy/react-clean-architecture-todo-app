import Todo from "../../domain/entities/Todo"
import TodoRepository from "../../domain/repositories/TodoRepository"
import { db } from './firebase-config';
import { addDoc, collection, getDocs, orderBy, query, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default class TodoRepositoryImpl implements TodoRepository {

    todosCollectionRef = collection(db, "todos")
    todos = {
        list: []
    }

    async GetTodo(): Promise<Todo[]> {
        await getDocs(query(this.todosCollectionRef, orderBy('timestamp'))).then((data: any) => {
            data.docs.map((doc: any) => this.todos.list.push(({ ...doc.data(), id: doc.id })))
        })

        return this.todos.list
    }

    async AddTodo(todo: any): Promise<Todo[]> {
        await addDoc(this.todosCollectionRef, todo)
        await this.GetTodo();
        
        return this.todos.list
    }

    async UpdateTodo(todo: any): Promise<Todo[]> {
        const { id, text } = todo
        const todoDoc = doc(db, "todos", id)
        await updateDoc(todoDoc, { text: text })
        await this.GetTodo();

        return this.todos.list
    }

    async DeleteTodo(id: any): Promise<Todo[]> {
        const todoDoc = doc(db, "todos", id)
        await deleteDoc(todoDoc)
        await this.GetTodo();

        return this.todos.list;
    }

    async ToggleComplete(todo: any): Promise<Todo[]> {
        const { id, completed } = todo
        const todoDoc = doc(db, "todos", id)
        await updateDoc(todoDoc, { completed: completed })
        await this.GetTodo();

        return this.todos.list
    }

}
