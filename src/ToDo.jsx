import React, { useState } from 'react';
import "./ToDo.css";

function ToDo({ id, task, completed, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  function handleSubmit(e) {
    e.preventDefault();
    onEdit(id, editTask);
    setIsEditing(false);
  }

  return (
    <article className="Todo">
    	{isEditing ? (
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={editTask}
					onChange={(e) => setEditTask(e.target.value)}
				/>
				<button type="submit">Saglabāt</button>
			</form>
      ) : (
			<label>
				<input
					type="checkbox"
					checked={completed}
					onChange={() => onToggle(id)}
				/>
			{task}
			</label>
			)}
    	<button onClick={() => onDelete(id)}>
			❌
		</button>
      		{!isEditing && (
        <button onClick={() => {setEditTask(task);setIsEditing(true);}}>
        	🧹
        </button>
      		)}
    </article>
  );
}

export default ToDo;
