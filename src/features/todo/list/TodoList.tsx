import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks";
import TodoCTA from "../add/CTA";
import { deleteTodo, editTodo, toggleTodo } from "./TodoListSlice";
import { useState } from "react";

const TodoList = () => {
  const todoList = useAppSelector((state) => state.todo.todoList);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>todolist header</h1>
      <TodoCTA />

      {todoList?.length ? <hr /> : null}

      <div>
        {todoList &&
          todoList?.map((todo, idx) => (
            <div className="item" key={todo.id}>
              {todo.isComplete ? <del>{todo.value}</del> : todo.value}

              <div className="actions">
                <label htmlFor="complete" title="Mark as a complete">
                  <input
                    type="checkbox"
                    name="complete"
                    id="complete"
                    onClick={() => dispatch(toggleTodo(idx))}
                  />
                  complete
                </label>
                <button
                  className="btn remove"
                  title="Delete"
                  onClick={() => dispatch(deleteTodo(idx))}
                >
                  x
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TodoList;
