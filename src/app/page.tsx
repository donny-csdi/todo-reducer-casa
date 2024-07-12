"use client";

import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { addTodo, checkTodo, deleteTodo, setText } from "./reducer/todo";
import { ITodo } from "./types/todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-purple-900 flex-col">
      <div className="w-1/3">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default Home;
