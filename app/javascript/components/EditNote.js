import React from 'react';

const EditNote = (props) => {
  return (
    <div className="container">
      <h1>Form</h1>
      <a href="/notes">Back</a>
      <form action={`/notes/${props.note.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Title</p>
        <input defaultValue={props.note.title} name="note[title]" />
        <p>Note</p>
        <textarea defaultValue={props.note.body} name="note[body]" />
        <br />
        <button type="submit">Change</button>
      </form>
    </div>
  );
};

export default EditNote;