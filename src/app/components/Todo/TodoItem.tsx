import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const TodoItem = ({ id, completed, text, toggleComplete, deleteTodo, updateTodo }) => {
  
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [editItem, setEditItem] = useState(text);

  const handleComplete = () => {
    dispatch(toggleComplete({
      id: id,
      completed: !completed
    }))
  }

  const handleDelete = () => {
    dispatch(deleteTodo({
      id: id
    }));
  }

  const handleEdit = (value) => {
    if (editItem !== '') {
      dispatch(updateTodo({
        id: id,
        text: editItem
      }))
      setEdit(false);

    }
  }

  return <li key={id} className={`hover:bg-gray-100 p-3 ${completed ? "bg-gray-50" : ""}`}>
    <div className="flex gap-3 justify-between items-center">
      <div className="flex items-center gap-5 flex-1">
        <div className="form-check">
          <input checked={completed} onChange={handleComplete} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sky-500 checked:border-sky-500 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" />
        </div>

        {edit ? (
          // <input type="text" value={editItem} onChange={e => this.onTodoChange(e.target.value)} className=" border-gray-300 w-full border rounded focus:outline-none py-2 px-3 focus:ring-2 focus:ring-text-sky-400" />
          <input type="text" value={editItem} onChange={(e) => setEditItem(e.target.value)} className="border-gray-300 w-full border rounded focus:outline-none py-2 px-3 focus:ring-2 focus:ring-text-sky-400" />
        ) : (
          <p className={`${completed ? "line-through" : ""}`}>{text}</p>

        )}

      </div>

      <div className='flex-none flex gap-2'>

        {edit ? (<button onClick={handleEdit} className="inline-flex items-center justify-center p-2 text-white bg-sky-400 hover:bg-sky-500 rounded-md shadow-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </button>

        ) : (<button onClick={() => setEdit(true)} className="inline-flex items-center justify-center p-2 text-white bg-sky-400 hover:bg-sky-500 rounded-md shadow-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        </button>)}



        <button onClick={handleDelete} className="inline-flex items-center justify-center p-2 text-white bg-red-400 hover:bg-red-500 rounded-md shadow-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>
    </div>
  </li >;
}

export default TodoItem;