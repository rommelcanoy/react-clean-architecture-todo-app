import { useSelector, useDispatch } from 'react-redux'
import TodoInput from 'components/Todo/TodoInput';
import { saveTodo, toggleComplete, deleteTodo, updateTodo } from 'app/redux/todo/todoSlice'
import TodoList from 'components/Todo/TodoList';

function App() {
  const list = useSelector((state) => state.todo.list)
  // const dispatch = useDispatch()

  return (
    <div className="App h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-5 rounded max-w-screen-sm w-full flex flex-col gap-5">
        <h1 className="text-lg font-medium text-center text-gray-500">To Do</h1>
        <TodoInput saveTodo={saveTodo}/>
        <TodoList list={list} toggleComplete={toggleComplete} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
      </div>
    </div>
  );
}

export default App;
