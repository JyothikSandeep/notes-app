import React from "react";
import { useState } from "react";
import { IoMdCreate } from "react-icons/io";

const Addnote = ({ handleText }) => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (e) => {
    setNoteText(e.target.value);
    // console.log(e.target.value);
  };
  const handleClick = (e) => {
    handleText(noteText);
    // console.log(1);
  };
  return (
    <div class="new-note">
      <textarea
        className="text-area"
        cols="8"
        rows="10"
        placeholder="type your text here...."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <button onClick={handleClick} class="new-button">
        <IoMdCreate size={20}></IoMdCreate>create
      </button>
    </div>
  );
};

export default Addnote;
