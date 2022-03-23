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
    saveTodo: (state, action) => {
      const { text } = action.payload;

      const newTodo = {
        id: Date.now() + Math.random(),
        text: action.payload.text,
        completed: false,
      }

      if (text !== '') {
        state.list.push(newTodo);
      }

      localStorage.setItem('state', JSON.stringify(state.list));

    },
    toggleComplete: (state, action) => {
      const appState = state
      const index = state.list.findIndex((list) => list.id === action.payload.id);
      appState.list[index].completed = action.payload.completed;
      localStorage.setItem('state', JSON.stringify(state.list));
    },
    deleteTodo: (state, action) => {
      const appState = state
      appState.list = state.list.filter((item) => item.id !== action.payload.id)
      localStorage.setItem('state', JSON.stringify(state.list));
    },
    updateTodo: (state, action) => {
      const appState = state
      const index = state.list.findIndex((obj) => obj.id === action.payload.id);
      appState.list[index].text = action.payload.text;
      localStorage.setItem('state', JSON.stringify(state.list));
    },
    fetchTodo: (state) => {
      const appState = state

      const todoRepo = new TodoRepositoryImpl()
      const todoService = new TodoService(todoRepo)
      const todo = todoService.GetTodo()

      appState.list = todo
    }
  },
})

// Action creators are generated for each case reducer function
export const { saveTodo, toggleComplete, deleteTodo, updateTodo, fetchTodo } = todoSlice.actions

export default todoSlice.reducer