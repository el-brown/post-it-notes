class NotesController < ApplicationController
  #READ - all notes
  
  def index
    #@notes = Note.all
    render component: "Notes", props: {notes: Note.all}
  end


  #READ - single note
  def show
    note = Note.find(params[:id])
    render component: "Note", props:{note:note}
  end


  #NEW - new note in memory, but not the data base, use this to create our new form.
  def new
    render component: "NoteNew"
  end


  def edit 
    note = Note.find(params[:id])
    render component: "EditNote", props: {note:note}
  end

  
  def update
    note = Note.find(params[:id])
    if note.update(note_params)
      redirect_to notes_path
    else
      renders app/views/notes/edit.html.erb
    end
  end

  
  def create
    note = Note.new(note_params)
    if note.save
      redirect_to notes_path
    else
      #TODO handle invalid input
    end
  end


  def destroy
    Note.find(params[:id]).destroy
    redirect_to notes_path
  end


  private

  def note_params
    params.require(:note).permit(:title, :body)
  end





end
