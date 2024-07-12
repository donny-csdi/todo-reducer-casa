import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types/todo";

interface IForm {
  text: string;
}

export interface TodoState {
  todos: ITodo[];
  form: IForm;
}

const initialState: TodoState = {
  todos: [],
  form: {
    text: "",
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = [...state.todos, action.payload];
    },
    setText: (state, action: PayloadAction<string>) => {
      state.form = { ...state.form, text: action.payload };
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    checkTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => {
        if (todo.id === action.payload) {
          todo.isCheck = !todo.isCheck;
        }
        return todo;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, setText, deleteTodo, checkTodo } = todoSlice.actions;

export default todoSlice.reducer;
