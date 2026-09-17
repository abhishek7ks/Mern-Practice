import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Todo App</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          if (input !== "") {
            setTodos([...todos, input]);
            setInput("");
          }
        }}
      >
        {" "}
        Add Todo
      </button>
      {todos.map((todo, index) => (
        <p key={index}>
          {todo}
          <button onClick={() => setTodos(todos.filter((_, i) => i !== index))}>
            Delete
          </button>
        </p>
      ))}
    </>
  );
}

export default Todo; 
