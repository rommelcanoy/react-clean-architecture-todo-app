import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Item from "../../../domain/entities/Todo"
import TodoService from "../../../domain/usecases/TodoService"
import TodoRepositoryImpl from "../../../data/repositories/TodoRepositoryImpl"

interface todoState {
  list: Array<Item>
}

const initialState: todoState = {
  list: [],
}

const localStorage = (state, type: String) => {
  const todoRepo = new TodoRepositoryImpl()
  const todoService = new TodoService(todoRepo)
  switch (type) {
    case 'set':
      todoService.SetTodo(state.list)
    case 'get':
      const todo = todoService.GetTodo()
      state.list = todo
    default:
      return state
  }
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

      localStorage(state, 'set');
    },
    completeTodo: (state, action) => {
      const index = state.list.findIndex((list) => list.id === action.payload.id);
      state.list[index].completed = action.payload.completed;
      localStorage(state, 'set');
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id)
      localStorage(state, 'set');
    },
    updateTodo: (state, action) => {
      const index = state.list.findIndex((obj) => obj.id === action.payload.id);
      state.list[index].text = action.payload.text;
      localStorage(state, 'set');
    },
    fetchTodo: (state) => {
      localStorage(state, 'get');
    },
  },
})

// Action creators are generated for each case reducer function
export const { completeTodo, deleteTodo, updateTodo, fetchTodo, addTodo } = todoSlice.actions

export default todoSlice.reducer