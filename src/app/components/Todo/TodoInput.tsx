import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todo/todoSlice';


const TodoInput = ({ saveTodo }) => {
  const [item, setItem] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item !== '') {
      dispatch(addTodo({
        text: item
      }));
      setItem('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 text-sm">
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} className=" border-gray-300 w-full border rounded focus:outline-none py-2 px-3 focus:ring-2 focus:ring-text-sky-400" placeholder="Write here" />
      {/* <button type="submit" onClick={() => dispatch(saveTodo(item))} className="inline-flex items-center justify-center py-2 px-2 text-white bg-sky-400 hover:bg-sky-500 rounded-md shadow-lg"> */}
      <button type="submit" className="inline-flex items-center justify-center py-2 px-2 text-white bg-sky-400 hover:bg-sky-500 rounded-md shadow-lg">
        {/* Add */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
      </button>
    </form>
  );
}

export default TodoInput;