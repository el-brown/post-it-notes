class NotesController < ApplicationController
  #READ - all notes
  
  def index
    @notes = Note.all
    render component: "Notes", props: {notes: @notes}
  end

  #READ - single note
  def show
    @note = Note.find(params[:id])
    render component: "Note", props: {note: @note}
  end

  #NEW - new page in memory, but not the data base, use this to create our new form.
  def new
    @note = Note.new
    render component: "NoteNew", props: {note: @note}
  end
end
