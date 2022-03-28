import { getTodoAsync } from 'app/redux/todo/todoSlice'
import { useAppDispatch, useAppSelector } from "../app/redux/hooks"
import TodoList from 'app/components/Todo/TodoList';
import TodoInput from '../app/components/Todo/TodoInput';
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useAppDispatch()

  const { todo, loading } = useAppSelector((state) => ({
    todo: state.todo.list,
    loading: state.todo.loading,
  }))

  useEffect(() => {
    dispatch(getTodoAsync())
  }, []);

  return (
    <div className="App h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-5 rounded max-w-screen-sm w-full flex flex-col gap-5 text-gray-500">
        <h1 className="text-lg font-medium text-center text-gray-500">{ loading ? <span>Loading...</span> : <span>To Do</span>}</h1>
        <TodoInput />
        <TodoList list={todo} />
      </div>
    </div>
  );
}

export default App;
