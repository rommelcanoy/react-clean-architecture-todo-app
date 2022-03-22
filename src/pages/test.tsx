import Greet from "app/components/Test/Greet";
import Person from "app/components/Test/Person";
import PersonList from "app/components/Test/PersonList";
import Todo from "domain/entities/Todo"
// import { fetchTodo } from "../app/redux/todo/todoSlice"
import { deleteTodo, saveTodo, toggleComplete, updateTodo, fetchTodo } from 'app/redux/todo/todoSlice'
import { useAppDispatch, useAppSelector } from "../app/redux/hooks"
import TodoList from "app/components/Todo/TodoList";
// import dynamic from "next/dynamic";
import TodoInput from "app/components/Todo/TodoInput";
import React, { useState, useEffect } from 'react';
// const TodoList = dynamic(() => import("app/components/Todo/TodoList"), {
//   ssr: false,
// });


const Test = () => {

  const dispatch = useAppDispatch()

  const { todo } = useAppSelector((state) => ({
    todo: state.todo.list,
  }))

  useEffect(() => {
    dispatch(fetchTodo())
  }, []);

  // OBJECT PROPS
  const personName = {
    first: 'Rommel',
    last: 'Canoy'
  }

  const nameList = [
    {
      first: 'Rommel',
      last: 'Canoy'
    },
    {
      first: 'Brian',
      last: 'Canoy'
    },
    {
      first: 'Michael',
      last: 'Jordan'
    },
  ]


  const handleLocalStorage = () => {
    dispatch(fetchTodo())
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-5 flex flex-col gap-5">
        <Greet isLoggedIn name="Rommel" messageCount={20} />
        <Person name={personName} />
        <PersonList names={nameList} />

        {/* {typeof window !== 'undefined' && (
          <div>
            {todo.map((item: Todo) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </div>
        )} */}

        <TodoInput saveTodo={saveTodo} />


        <TodoList list={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} updateTodo={updateTodo} />


        <button className="bg-gray-100 p-3 rounded-md" onClick={handleLocalStorage}>Test local storage</button>
      </div>
    </div>
  )
}

export default Test;