import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addTodo } from "../reducer/todo";
import { ITodo } from "../types/todo";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const todoSchema = yup.object({
  text: yup.string().required(),
  id: yup.number(),
  isCheck: yup.boolean(),
});

const TodoForm = () => {
  const { todos } = useSelector((state: RootState) => state.todo);

  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(todoSchema),
  });

  const onSubmit = (data: any) => {
    const newTodo: ITodo = {
      text: data.text,
      id: todos.length + 1,
      isCheck: false,
    };
    dispatch(addTodo(newTodo));
    reset();
  };

  return (
    <form className="todo__form flex gap-3" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="border border-black py-1 rounded px-3 bg-slate-500 w-full"
        {...register("text")}
      />
      <button className="bg-black text-white px-5 py-1 rounded">Submit</button>
    </form>
  );
};

export default TodoForm;
