#  Application Note
##A JavaScript Test Driven Development
This is a simple application that stores note with methods to manipulate data stored.
Each note is stored with a unique ID, note content and the author of the note.

The Note application is built on *mocha* framework.

###Functions

* [Add note] (#addnote)

* [List notes] (#listnotes)

* [Get note] (#getnote)

* [Edit note] (#editnote)

* [Delete note] (#deletenote)

* [Search notes] (#searchnotes)

#####<a name="addnote"></a>Add note
The *addNote* function creates a new note instance and add to the note list. It takes a note object parameter and push to the note list.
 
    addNote(note)