import React, { useEffect, useState } from "react";
import Diary from "./Diary";

function getLocalDiaries() {
	const stored = localStorage.getItem("diaries");
	return stored ? JSON.parse(stored) : [];
  }

function DiariesList() {
  const [diaries, setDiaries] = useState(getLocalDiaries);
  const [newDiary, setNewDiary] = useState({
    title: "",
    body: "",
    date: "",
  });

  useEffect(() => {
	localStorage.setItem("diaries", JSON.stringify(diaries));
  }, [diaries]);

  function handleAdd(event) {
    event.preventDefault();
    const newDiaryEntry = {
      id: crypto.randomUUID(),
      ...newDiary,
    };
    setDiaries([...diaries, newDiaryEntry]);
    setNewDiary({ title: "", body: "", date: "" });
  }

  function handleDelete(id) {
    setDiaries(diaries.filter(diary => diary.id !== id));
  }

  function handleEdit(id, updatedDiary) {
    setDiaries(
      diaries.map((diary) =>
        diary.id === id ? { ...diary, ...updatedDiary } : diary
      )
    );
  }

  return (
    <article>
    	<form onSubmit={handleAdd}>
        	<label>
				Title:
				<input
					type="text"
					value={newDiary.title}
					onChange={(e) => setNewDiary({ ...newDiary, title: e.target.value })}
				/>
        	</label>
        <br />
			<label>
				Body:
				<textarea
					value={newDiary.body}
					onChange={(e) => setNewDiary({ ...newDiary, body: e.target.value })}
				/>
			</label>
        <br />
			<label>
			Date:
				<input
					type="date"
					value={newDiary.date}
					onChange={(e) => setNewDiary({ ...newDiary, date: e.target.value })}
				/>
			</label>
        <br />
        	<button type="submit">Add Diary</button>
    	</form>

    	{/* Dienasgrāmatas ieraksti */}
    	{diaries.map((entry) => (
			<Diary
				key={entry.id}
				{...entry}
				onDelete={handleDelete}
				onEdit={handleEdit}
			/>
    	))}
    </article>
  );
}

export default DiariesList;
