import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Item from "../../../domain/entities/Todo"
import TodoService from "../../../domain/usecases/TodoService"
import TodoRepositoryImpl from "../../../data/repositories/TodoRepositoryImpl"

interface todoState {
  loading: boolean
  list: Array<Item>
}

const initialState: todoState = {
  loading: false,
  list: [],
}

export const getTodoAsync = createAsyncThunk('todos/getTodoAsync', async () => {
  const todoRepo = new TodoRepositoryImpl()
  const todoService = new TodoService(todoRepo)
  const todo = todoService.GetTodo()
  return todo
});

export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (payload: any) => {
  const { text } = payload;

  const newTodo = {
    timestamp: Date.now(),
    text: payload.text,
    completed: false,
  }

  if (text !== '') {
    const todoRepo = new TodoRepositoryImpl()
    const todoService = new TodoService(todoRepo)
    const todo = todoService.AddTodo(newTodo);
    return todo
  }
});

export const updateTodoAsync = createAsyncThunk('todos/updateTodoAsync', async (payload: any, { getState }) => {
  const state = getState();

  const prevTodo = state.todo.list.find((list) => list.id === payload.id);
  if (prevTodo.text !== payload.text) {
    const todoRepo = new TodoRepositoryImpl()
    const todoService = new TodoService(todoRepo)
    const todo = todoService.UpdateTodo(payload)
    return todo
  }
  return state.todo.list
});

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodoAsync', async (payload: any) => {
  const { id } = payload;
  const todoRepo = new TodoRepositoryImpl()
  const todoService = new TodoService(todoRepo)
  const todo = todoService.DeleteTodo(id)
  return todo
});

export const toggleCompleteAsync = createAsyncThunk('todos/toggleCompleteAsync', async (payload: any) => {
  const todoRepo = new TodoRepositoryImpl()
  const todoService = new TodoService(todoRepo)
  const todo = todoService.ToggleComplete(payload)
  return todo
});

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getTodoAsync.fulfilled, (state, action) => {
      state.list = action.payload,
        state.loading = false
    })
    builder.addCase(getTodoAsync.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(addTodoAsync.fulfilled, (state, action) => {
      state.list = action.payload,
        state.loading = false
    })
    builder.addCase(addTodoAsync.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(deleteTodoAsync.fulfilled, (state, action) => {
      state.list = action.payload,
        state.loading = false
    })
    builder.addCase(deleteTodoAsync.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(updateTodoAsync.fulfilled, (state, action) => {
      state.list = action.payload,
        state.loading = false
    })
    builder.addCase(updateTodoAsync.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(toggleCompleteAsync.fulfilled, (state, action) => {
      state.list = action.payload,
        state.loading = false
    })
    builder.addCase(toggleCompleteAsync.pending, (state, action) => {
      state.loading = true
    })
  }
})

// Action creators are generated for each case reducer function
export const { } = todoSlice.actions

export default todoSlice.reducer