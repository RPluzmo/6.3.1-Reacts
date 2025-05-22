import React, { useState } from "react";
import Diary from "./Diary";

function DiariesList() {
  const [diaries, setDiaries] = useState([
    {
      id: 1,
      title: "Bombardino",
      body: "E-klase",
      date: "2025-05-19",
    },
    {
      id: 2,
      title: "Krokadilo",
      body: "Voulez VOUUS",
      date: "2025-05-20",
    },
    {
      id: 3,
      title: "Uzdevums dienasgrāmata",
      body: "carbon dioxide",
      date: "2025-05-22",
    },
  ]);

  const [newDiary, setNewDiary] = useState({
    title: "",
    body: "",
    date: "",
  });

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
    <div>
      {/* Dienasgrāmatas pievienošanas forma */}
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
    </div>
  );
}

export default DiariesList;
