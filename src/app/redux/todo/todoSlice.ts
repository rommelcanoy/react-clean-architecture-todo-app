import { createSlice } from '@reduxjs/toolkit'
import TodoRepositoryImpl from "../../../data/repositories/TodoRepositoryImpl"
import Item from "../../../domain/entities/Todo"
import TodoService from "../../../domain/usecases/TodoService"

interface todoState {
  list: Array<Item>
}

const initialState: todoState = {
  list: [],
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { text } = action.payload;

      const newTodo = {
        id: Date.now() + Math.random(),
        text: action.payload.text,
        completed: false,
      }

      if (text !== '') {
        state.list.push(newTodo);
      }

      todoSlice.caseReducers.storeLocalStorage(state)
    },
    completeTodo: (state, action) => {
      const index = state.list.findIndex((list) => list.id === action.payload.id);
      state.list[index].completed = action.payload.completed;

      todoSlice.caseReducers.storeLocalStorage(state)
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id)

      todoSlice.caseReducers.storeLocalStorage(state)
    },
    updateTodo: (state, action) => {
      const index = state.list.findIndex((obj) => obj.id === action.payload.id);
      state.list[index].text = action.payload.text;

      todoSlice.caseReducers.storeLocalStorage(state)
    },
    fetchTodo: (state) => {
      const todoRepo = new TodoRepositoryImpl()
      const todoService = new TodoService(todoRepo)
      const todo = todoService.GetTodo()
      state.list = todo
    },
    storeLocalStorage: (state) => {
      console.log('reducer store to localstorage')
      const todoRepo = new TodoRepositoryImpl()
      const todoService = new TodoService(todoRepo)
      const todo = todoService.SetTodo(state.list)
      return todo
    }
  },
})

// Action creators are generated for each case reducer function
export const { completeTodo, deleteTodo, updateTodo, fetchTodo, addTodo } = todoSlice.actions

export default todoSlice.reducer