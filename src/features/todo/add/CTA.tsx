import { useState } from "react";
import { add } from "../list/TodoListSlice";
import { useAppDispatch } from "../../../app/redux/hooks";

const TodoCTA = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();

  function AddTodo() {
    if (value?.length) {
      dispatch(add(value));
      setValue("");
    } else {
      alert("Please enter value!");
    }
  }

  return (
    <div className="AddTodo">
      <input
        type="text"
        autoFocus
        value={value}
        placeholder="Add todo..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn add" onClick={AddTodo}>
        add
      </button>
    </div>
  );
};

export default TodoCTA;
