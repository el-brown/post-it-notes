import React from "react";

const Notes = (props) => {
  const renderNotes = () => {
  return props.notes.map((note) => {
    return (
    <div style={{ border: "3px solid", margin: "30px" }}>
      <h1>{note.title}</h1>
      <h6>{note.author}</h6>
      <p>{note.body}</p>
      <a href={`/notes/${note.id}`}>show</a>
      <a href={`/notes/${note.id}/edit`}>edit</a>
      <a href={`/notes/${note.id}`} data-method="delete">delete
      </a>
    </div>
    );
  });
};

  return (
    <div>
      <h1>Notes</h1>
      <a href="/notes/new">New Page</a>
      {renderNotes()}
    </div>
  );
  };

  export default Notes;