import React from "react";
import Diary from "./Diary";



function DiariesList() {
  const diaries = [
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
  ];

  return (
    <>
      {diaries.map((entry) => (
        <Diary key={entry.id} {...entry} />
      ))}
    </>
  );
}

export default DiariesList;