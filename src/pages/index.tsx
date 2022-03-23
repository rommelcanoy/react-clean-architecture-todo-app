import { addTodo, deleteTodo, fetchTodo, completeTodo, updateTodo } from 'app/redux/todo/todoSlice'
import { useAppDispatch, useAppSelector } from "../app/redux/hooks"
import TodoList from 'app/components/Todo/TodoList';
import TodoInput from '../app/components/Todo/TodoInput';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch()

  const { todo } = useAppSelector((state) => ({
    todo: state.todo.list,
  }))

  useEffect(() => {
    dispatch(fetchTodo())
  }, []);

  return (
    <div className="App h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-5 rounded max-w-screen-sm w-full flex flex-col gap-5">
        <h1 className="text-lg font-medium text-center text-gray-500">To Do</h1>
        <TodoInput saveTodo={addTodo} />
        <TodoList list={todo} toggleComplete={completeTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </div>
    </div>
  );
}

export default App;
