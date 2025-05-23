import React, { useEffect, useState } from "react";
import DiariesList from "./DiariesList";
import ToDo from "./ToDo";

function getLocalTodos() {
	const stored = localStorage.getItem("todos");
	return stored ? JSON.parse(stored) : [];
  }

function App() {
  const [todos, setTodos] = useState(getLocalTodos);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
	localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAdd(event) {
    event.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      task: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  }

function handleDelete(id) {
  setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
};

function handleToggle(id) {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
}

function handleEdit(id, newTask) {
	setTodos((prevTodos) =>
	  prevTodos.map((todo) =>
		todo.id === id ? { ...todo, task: newTask } : todo
	  )
	);
  }
  return (
    <>
    
      <form onSubmit={handleAdd}>
        <label>
          <input value={newTask} onChange={(event) => setNewTask(event.target.value)}/>
        </label>
        <button type="submit">Pievienot</button>
      </form>

    
      {todos.map((todo) => (
    	 <ToDo key={todo.id} 
			id={todo.id} 
			task={todo.task} 
			completed={todo.completed}
			onDelete={handleDelete} 
			onToggle={handleToggle} 
			onEdit={handleEdit}
		/>
      ))}
      <DiariesList/>
    </>
  );
}

export default App;
