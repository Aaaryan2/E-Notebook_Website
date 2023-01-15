import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63bfd3f573c3213923589d81",
      user: "63bfc31dc275a36711d88cff",
      title: "My Title",
      description: "This is my first note",
      tag: "personal",
      date: "2023-01-12T09:33:41.511Z",
      __v: 0,
    },
    {
      _id: "63bfd5439b3141998be2acbe",
      user: "63bfc31dc275a36711d88cff",
      title: "new title 2",
      description: "this is my new number",
      tag: "general",
      date: "2023-01-12T09:39:15.859Z",
      __v: 0,
    },
    {
      _id: "63bfd3f573c3213923589d81",
      user: "63bfc31dc275a36711d88cff",
      title: "My Title",
      description: "This is my first note",
      tag: "personal",
      date: "2023-01-12T09:33:41.511Z",
      __v: 0,
    },
    {
      _id: "63bfd3f573c3213923589d81",
      user: "63bfc31dc275a36711d88cff",
      title: "My Title",
      description: "This is my first note",
      tag: "personal",
      date: "2023-01-12T09:33:41.511Z",
      __v: 0,
    },
    {
      _id: "63bfd3f573c3213923589d81",
      user: "63bfc31dc275a36711d88cff",
      title: "My Title",
      description: "This is my first note",
      tag: "personal",
      date: "2023-01-12T09:33:41.511Z",
      __v: 0,
    },
    {
      _id: "63bfd3f573c3213923589d81",
      user: "63bfc31dc275a36711d88cff",
      title: "My Title",
      description: "This is my first note",
      tag: "personal",
      date: "2023-01-12T09:33:41.511Z",
      __v: 0,
    },
    {
      _id: "63bfd3f573c3213923589d81",
      user: "63bfc31dc275a36711d88cff",
      title: "My Title",
      description: "This is my first note",
      tag: "personal",
      date: "2023-01-12T09:33:41.511Z",
      __v: 0,
    },
    {
      _id: "63bfd3f573c3213923589d81",
      user: "63bfc31dc275a36711d88cff",
      title: "My Title",
      description: "This is my first note",
      tag: "personal",
      date: "2023-01-12T09:33:41.511Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children};
    </NoteContext.Provider>
  );
};

export default NoteState;
