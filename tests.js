'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

var note = new Note("Hello World", "Chidiebere");
var note1 = new Note("hello WORLD", "Chidi");
var note2 = new Note("HELLO WORLD", "Chi");
var newcontent = "HeLlO wOrLd";
var noteapp = new NotesApplication();

describe("Note creation works properly", function() {
    it("assigns author based on the parameter supplied in the constructor", function() {
         assert(note.author == "Chidiebere");
    });  
    it("checks note content is not null", function() {
        assert(typeof note.note !== null) 
    });
    });
describe("Notes application increments number of notes as notes are added", function() {
    it("increments the note list as notes are added", function() {
        assert(noteapp.notelist.length === 0);
        noteapp.addNote(note);
        assert(noteapp.notelist.length === 1);
    });
    });
describe("Listnotes works properly", function() {
    it("checks that list displays properly", function() {
        var str1 = "Note ID: " + 0 + "\n";
        var str2 = noteapp.notelist[0].note + "\n \n";
        var str3 = "Author by" + noteapp.notelist[0].author;
        assert(noteapp.listNotes() == str1 + str2 + str3);
      });
    });
describe("Getting note by ID works properly", function() {
    it("checks that getting note by id returns the proper string output", function() {
        assert(noteapp.getNote(0) === "Hello World");
    })
    it("checks that undefined parameter returns an invalid ID message", function() {
        assert(noteapp.getNote(-1) === "Invalid ID!!!");
        assert(noteapp.getNote(1.5) === "Invalid ID!!!");  
        assert(noteapp.getNote() === "Invalid ID!!!"); 
        assert(noteapp.getNote('a') === "Invalid ID!!!"); 
      });
    })
describe("Delete method works properly", function() {
    it("checks that the length of list reduces by one after deletion", function() {
        noteapp.addNote(note1);
        var initial_listcount = noteapp.notelist.length;
        noteapp.deleteNote(1)
        assert(initial_listcount - noteapp.notelist.length ==1)
            });
    it("checks that undefined parameter returns an invalid ID message", function() {
        assert(noteapp.deleteNote(-1) === "Invalid ID!!!");
        assert(noteapp.deleteNote(1.5) === "Invalid ID!!!");
        assert(noteapp.deleteNote() === "Invalid ID!!!"); 
        assert(noteapp.deleteNote('a') === "Invalid ID!!!");

      });
    });
describe("Edit method works properly", function() {
    it("checks that the note content is updated properly", function() {
        noteapp.edit(0, newcontent); 
        assert(noteapp.notelist[0].note === newcontent);
            });
    it("checks that it returns a success message", function() {
        assert(noteapp.edit(0, newcontent) == "Note 0 changed successfully");
            });
    it("checks that undefined parameter returns an invalid ID message", function() {
        assert(noteapp.edit(-1,  newcontent) == "Invalid ID!!!");
        assert(noteapp.edit(1.5, newcontent) == "Invalid ID!!!");  
      });
     });
describe("Search works properly", function() {
    it("check that it returns the right notes containing the search text in the right format", function() {
        noteapp.addNote(note1)
        var searchtext = "hello";
        var str = "Showing results for 'hello'\n";
        var str1 = "Note ID: 1\n";
        var str2 = "hello WORLD\n\n";
        var str3 =  "Author by Chidi";
        var res = noteapp.search(searchtext)
        assert(res == (str + str1 + str2 + str3));
   });
 })
