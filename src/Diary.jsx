	import React, { useState } from "react";

	function Diary({ id, title, body, date, onDelete, onEdit }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editDiary, setEditDiary] = useState({ title, body, date });

	function handleSubmit(e) {
		e.preventDefault();
		onEdit(id, editDiary);  // Izsauc onEdit funkciju ar jaunajiem datiem
		setIsEditing(false);
	}

	return (
		<article>
		{isEditing ? (
			<form onSubmit={handleSubmit}>
			<label>
				Title:
				<input
				required
				type="text"
				value={editDiary.title}
				onChange={(e) =>
					setEditDiary({ ...editDiary, title: e.target.value })
					
				}
				/>
			</label>
			<br />
			<label>
				Body:
				<textarea
				value={editDiary.body}
				onChange={(e) =>
					setEditDiary({ ...editDiary, body: e.target.value })
				}
				/>
			</label>
			<br />
			<label>
				Date:
				<input
				type="date"
				value={editDiary.date}
				onChange={(e) =>
					setEditDiary({ ...editDiary, date: e.target.value })
				}
				/>
			</label>
			<br />
			<button type="submit">Saglabat</button>
			</form>
		) : (
			<>
			<h2>{title}</h2>
			<p>{body}</p>
			<small>{date}</small>
			</>
		)}

		
		<button onClick={() => onDelete(id)}>❌</button>
		{!isEditing && (
			<button onClick={() => setIsEditing(true)}>🧹</button>
		)}
		</article>
	);
	}

	export default Diary;
