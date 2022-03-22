import { deleteTodo, fetchTodo, saveTodo, toggleComplete, updateTodo } from 'app/redux/todo/todoSlice'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from "../app/redux/hooks"
import TodoList from 'app/components/Todo/TodoList';
import TodoInput from '../app/components/Todo/TodoInput';
import { useEffect } from 'react';
// import TodoList from '../app/components/Todo/TodoList';
// import dynamic from "next/dynamic";
// const TodoList = dynamic(() => import("app/components/Todo/TodoList"), {
//   ssr: false,
// });

function App() {
  const dispatch = useAppDispatch()

  const { todo } = useAppSelector((state) => ({
    todo: state.todo.list,
  }))
  // const list = useSelector((state) => state.todo.list)

  useEffect(() => {
    dispatch(fetchTodo())
  }, []);

  return (
    <div className="App h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-5 rounded max-w-screen-sm w-full flex flex-col gap-5">
        <h1 className="text-lg font-medium text-center text-gray-500">To Do</h1>
        <TodoInput saveTodo={saveTodo} />
        <TodoList list={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </div>
    </div>
  );
}

export default App;
