"use client";

import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { PasswordForm } from "./components/PasswordForm";

function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-purple-900 flex-col">
      <div className="w-1/3">
        <PasswordForm />
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default Home;
