import React from 'react';

const NoteNew = () => {
  return (
    <div className="container">
      <h1>Form</h1>
      <a href="/notes">Back</a>
      <form action="/notes" method="post">
        <p>Title</p>
        <input name="note[title]" />
        <p>Author</p>
        <input name="note[author]" />
        <p>Note</p>
        <textarea name="note[body]" />
        <br/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NoteNew;