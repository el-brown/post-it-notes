import React from "react";

const Notes = (props) => {
  const renderNotes = () => {
    return props.notes.map((note) => {
      return (
        <div style={{ border: "1px solid", margin: "40px", padding:"2px 0 25px 25px" }}>
          <h1>{note.title}</h1>
          <p>{note.body}</p>
          <a href={`/notes/${note.id}`} style={{padding:"5px"}}>Show</a>
          <a href={`/notes/${note.id}/edit`} style={{padding:"5px"}}>Edit</a>
          <a href={`/notes/${note.id}`} style={{padding:"5px"}} data-method="delete">Delete
          </a>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Notes</h1>
      <a href="/notes/new">New Note</a>
      {renderNotes()}
    </div>
  );
};

export default Notes;