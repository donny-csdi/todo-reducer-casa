import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { checkTodo, deleteTodo, setText } from "../reducer/todo";

const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    dispatch(setText(e.currentTarget.value));
  };

  const handleCheck = (id: number) => {
    dispatch(checkTodo(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <section className="todo__list">
      {todos.map((items, index) => (
        <div
          key={index}
          className="my-3 bg-white flex  rounded h-70 px-3 justify-between"
        >
          <p className={`${items?.isCheck ? "line-through" : ""} text-black`}>
            {items.text}
          </p>
          <div>
            <span
              className="cursor-pointer"
              onClick={() => handleCheck(items.id)}
            >
              ✅
            </span>
            <span
              className="cursor-pointer"
              onClick={() => handleDelete(items.id)}
            >
              🗑️
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
