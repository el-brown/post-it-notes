import React from 'react';

const Note = (props) => {
  return (
    <div>
      <h1> {props.note.title}</h1>
      <h6>{props.note.author}</h6>
      <p>{props.note.body}</p>
      <a href={`/notes/${props.note.id}/edit`}>Edit</a>
      <a href={`/notes`} style={{padding:"7px"}}>Back</a>
    </div>
  );
};

export default Note;