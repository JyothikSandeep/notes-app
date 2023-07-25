import React from "react";
// import ReactDOM from "react-dom/client";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
// import { DonutLarge } from "@mui/icons-material";
import { BsJournalRichtext } from "react-icons/bs";
import { nanoid } from "nanoid";
import Note from "./components/note.js";
import { useState, useEffect } from "react";
const App = () => {
  const [notes, setNotes] = useState(
    [
      {
        id: nanoid,
        text: "Hi this is created by Jyothik",
        date: "1/03/2023",
      },
      {
        id: nanoid,
        text: "Type the text and click create",
        date: "1/03/2023",
      },
    ],
    []
  );
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const notesarray = [...notes, newNote];
    setNotes(notesarray);
    // const newNotes = [...notes, newNote];
    // setNotes(newNotes);
    console.log(text);
  };
  const deleteNote = (id) => {
    const notesarray = notes.filter((note) => note.id !== id);
    setNotes(notesarray);
  };
  return (
    <div class="main-container">
      <BsJournalRichtext size={60} color="pink"></BsJournalRichtext>
      <span className="notes">Note's</span>
      <Note
        notes={notes}
        handleText={addNote}
        handleDeleteNote={deleteNote}
      ></Note>
      {/* {notes.map((note) => (
        <Note notes={notes}></Note>
      ))} */}
      {/* <Note notes={notes}></Note>
      <Note notes={notes}></Note>
      <Note></Note>
      <Note></Note> */}
    </div>
  );
};
export default App;
