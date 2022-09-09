import { createSlice } from "@reduxjs/toolkit";

type TodoListType = {
  id: number;
  value: string;
  isComplete: boolean;
};

type initStateType = {
  todoList: TodoListType[];
};

const initialState = {
  todoList: [],
} as initStateType;

let id = 1;

const todoSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todoList.push({ id, value: action.payload, isComplete: false });
      id += id;
    },
    toggleTodo: (state, action) => {
      state.todoList[action.payload].isComplete =
        !state.todoList[action.payload].isComplete;
    },
    deleteTodo: (state, action) => {
      state.todoList.splice(action.payload, 1); // If in complex application I will not use this way to remove
    },
    editTodo: (state, action) => {
      state.todoList[action.payload.id].value = action.payload.value; // If in complex application I will not use this way to remove
    },
  },
});

export const { add, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
