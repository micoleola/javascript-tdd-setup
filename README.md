#  Note Application 
##A JavaScript Test Driven Development
This is a simple application that stores notes with methods to manipulate data stored.
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





#####<a name="listnotes"></a>List notes
The *listnotes* function returns the list of notes stored in a predefined format.
 
    listNote()





#####<a name="getnote"></a>Get note
The *getNote* function selects a note from the note list by it unique ID.  It takes a number parameter(noteID) and returns the note content if the ID exists.
 
    getNote(note_id)





#####<a name="editnote"></a>Editnote
The *editNote* function selects a note from the list by ID and allows modification of note. It takes in a number parameter(noteID).
 
    getNote(note_id)





#####<a name="deletenote"></a>Delete note
The *deleteNote* function selects a note from the list by ID and pops it off the note list. It takes in a number parameter(noteID).
 
    deleteNote(note_id)





#####<a name="searchnote"></a>Search note
The *searchNote* function checks through the note content of the notes in the list for a specified text. It takes string parameter(the text to search for) and returns all note objects that the note content include the search text.
 
    searchNote(search_text)

