import React from "react";
import { MdDeleteSweep } from "react-icons/md";

const NoteText = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="text">
      <div className="format">
        <span id={id}>{text}</span>

        <div className="footer">
          <span className="date">{date}</span>
          <MdDeleteSweep
            size={30}
            onClick={() => handleDeleteNote(id)}
            className="del-btn"
          ></MdDeleteSweep>
        </div>
      </div>
    </div>
  );
};

export default NoteText;
