import React from "react";
import NoteText from "./noteText";
import Addnote from "./addNote";
const note = ({ notes, handleText, handleDeleteNote }) => {
  return (
    <div class="notes-format">
      <div class="note-note">
        <Addnote handleText={handleText}></Addnote>
      </div>

      <div>
        {notes.map((note) => (
          <NoteText
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          ></NoteText>
        ))}
      </div>

      {/* <div>{<NoteText id={note.id} text={note.text}></NoteText>}</div> */}
    </div>
  );
};

export default note;
