import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addTodo, setText } from "../reducer/todo";
import { ITodo } from "../types/todo";

const TodoForm = () => {
  const { todos, form } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    dispatch(setText(e.currentTarget.value));
  };

  const handleAddTodo = () => {
    if (form.text) {
      const newTodo: ITodo = {
        text: form.text,
        id: todos.length + 1,
        isCheck: false,
      };
      dispatch(addTodo(newTodo));
      dispatch(setText(""));
    }
  };
  return (
    <form action={handleAddTodo} className="todo__form flex gap-3">
      <input
        type="text"
        className="border border-black py-1 rounded px-3 bg-slate-500 w-full"
        value={form.text}
        onChange={handleChange}
      />
      <button className="bg-black text-white px-5 py-1 rounded">Submit</button>
    </form>
  );
};

export default TodoForm;
