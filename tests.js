'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

var note = new Note("Hello World", "Chidiebere");
var note1 = new Note("hello WORLD", "Chidi");
var note2 = new Note("HELLO WORLD", "Chi");
var noteapp = new NotesApplication();

describe("Note creation works properly", function() {
    it("assigns author based on the parameter supplied in the constructor", function() {
         assert(note.author == "Chidiebere");
    });   
describe("Notes application increments number of notes as notes are added", function() {
    it("increments the note list as notes are added", function() {
        assert(noteapp.notelist.length == 0);
        noteapp.addNote(note);
        assert(noteapp.notelist.length == 1);
    });
describe("Getting note by ID works properly", function() {
    it("checks if the getting note by id returns the proper output", function() {
        assert(noteapp.getNote(0) == "Hello World");
    })
    it("checks if undefined ID returns the right message", function() {
        assert(noteapp.getNote(-1) == "ID not found");
        assert(noteapp.getNote(1.5) == "ID not found");  
      });
    it("checks if output is string", function() {
        assert.isString(noteapp.getNote(1));
    })
 })
describe("Listnotes works properly", function() {
    it("checks that list displays properly", function() {
        noteapp.listNotes();
        assert("Note ID:", noteapp.notelist[0],"\n"+ noteapp.notelist()[0].note, "\n \n"+"Author by", noteapp.notelist[0].author,"\n");
      });
describe("Delete method works properly", function() {
    it("checks that the length of list reduces by one after deletion", function() {
        noteapp.addNote(note);
        noteapp.addNote(note1);
        initial_listcount = notes.length;
        noteapp.deleteNote(1)
        assert(initial_listcount - notes.length ==1)
            });
    it("checks if undefined ID returns the right message", function() {
        assert(noteapp.deleteNote(-1) == "ID not found");
        assert(noteapp.deleteNote(1.5) == "ID not found");  
      });
    });
describe("Edit method works properly", function() {
    it("checks that the note content is updated properly", function() {
        var newcontent = "HELLO WORLD";
        noteapp.addNote(note);
        assert(noteapp.edit(0, newcontent) == "Note 0 changed successfully");
        assert(noteapp.notes.note == newcontent);
            });
    it("checks if undefined ID returns the right message", function() {
        assert(noteapp.edit(-1, newcontent) == "ID not found");
        assert(noteapp.edit(1.5, newcontent) == "ID not found");  
      });
     });
describe("Search works properly", function() {
    it("check if it returns the right notes containing the search text", function() {
        var searchtext = "hello";
        assert(noteapp.search(searchtext) == "Showing results for '"+ search_text+"' \n \n Note ID:", i +"\n"+noteapp.notelist[i].note, "\n \n Author by", this.notelist[i].author, "\n");
    })
   })
  });
 });
});