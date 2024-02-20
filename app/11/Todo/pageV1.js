"use client"

import { useState } from "react";
import { FaCircleMinus } from "react-icons/fa6";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");


  const handleAdd = (text) => {
    setTodos([...todos, text])
  }

  const handleDelete = (text) => {
    setTodos(todos.filter((todo) => todo !== text))
  }

  return (
    <main>
      <h1>Liste à faire</h1>
      <input type="text" onChange={e => setValue(e.target.value)} />
      <button onClick={() => handleAdd(value)}>Ajouter</button>

      {todos.map((todo, idx) => (
        <div className="list" key={idx}>
          {todo}
          <FaCircleMinus onClick={() => handleDelete(todo)} className="minus" />
        </div>
      ))}

    </main>
  );
}
