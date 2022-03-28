import React from 'react';
import TodoItem from './TodoItem'

const TodoList = ({list}) => {

  return ( 
    <ul className=" text-slate-400 text-sm">
      {
        list.length > 0 ? list.slice(0).reverse().map((list) => <TodoItem key={list.id} id={list.id} text={list.text} completed={list.completed} />)
        : <p className="text-center">Please add to-do</p>
      }
    </ul>
   );
}
 
export default TodoList;