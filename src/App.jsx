// App.jsx
import React from "react";
import ToDo from "./ToDo";  // Importē ToDo komponenti

function App() {
  const todos = [
    { id: 1, task: "Iemācīties React", completed: false },
    { id: 2, task: "Iemācīties Laravel", completed: true },
    { id: 3, task: "Nopirkt pienu", completed: false },
  ];

  return (
    <div>
      {todos.map((todo) => (
        <ToDo key={todo.id} task={todo.task} completed={todo.completed} />
      ))}
    </div>
  );
}

export default App;
