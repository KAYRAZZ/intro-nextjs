"use client"

import { useState } from "react";
import { FaCircleMinus } from "react-icons/fa6";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const [id, setId] = useState(0)


  const handleAdd = (text) => {
    setTodos([...todos, { id, text }])
    setId(id + 1)
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <main>
      <h1>Liste à faire</h1>
      <input type="text" onChange={e => setValue(e.target.value)} />
      <button onClick={() => handleAdd(value)}>Ajouter</button>

      {todos.map((todo, idx) => (
        <div className="list" key={idx}>
          {todo.text}
          <FaCircleMinus onClick={() => handleDelete(todo.id)} className="minus" />
        </div>
      ))}

    </main>
  );
}
