import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const TodoForm = dynamic(() => import("../components/TodoForm"));
const TodoList = dynamic(() => import("../components/TodoList"));

function TodoLanding() {
  const [showForm, setShowForm] = useState(false);
  const { todos } = useSelector((state: RootState) => state.todo);
  return (
    <div>
      <button
        className="bg-black text-white px-5 py-1 rounded mb-5"
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        Create New Todo
      </button>
      <div>{showForm && <TodoForm />}</div>
      <div>{todos.length > 0 && <TodoList />}</div>
    </div>
  );
}

export default TodoLanding;
