import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    // { id: 321, text: 'this is the first text', completed: false },
  ]
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      const {text} = action.payload;

      const newTodo = {
        id: Date.now() + Math.random(),
        text: action.payload.text,
        completed: false,
      }

      if (text !== '') {
        state.list.push(newTodo);
      }

    },
    toggleComplete: (state, action) => {
      const appState = state
      const index = state.list.findIndex((list) => list.id === action.payload.id);
      appState.list[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      const appState = state
      appState.list = state.list.filter((item) => item.id !== action.payload.id)
    },
    updateTodo: (state, action) => {
      const appState = state
      const index = state.list.findIndex((obj) => obj.id === action.payload.id);
      appState.list[index].text = action.payload.text;
    }
  },
})

// Action creators are generated for each case reducer function
export const { saveTodo, toggleComplete, deleteTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer