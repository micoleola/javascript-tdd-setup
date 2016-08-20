/**
 * NoteApplication Class defines the collections of note.
 * @param {Object[]} An array containing all notes.
 * @constructor
  */
module.exports = function() {
	this.notelist = [];		
	var Note = require('./notes.js');	
/** 
 * Creates an instance of the Note class and add to the array of notes.
 * @param {Object} note - an instance of the Note class
*/
	this.addNote = function(note) {
		if (note instanceof Note) {
		this.notelist.push(note);
			}
		}
/**
 * List all notes in the array of notes.
 * @returns {Object[]} list of note objects in the array
*/
	this.listNotes = function() {
		if(this.notelist.length > 0) {
		for(var i = 0; i < this.notelist.length; i++) {
				var str1 = "Note ID: " + i + "\n";
				var str2 = this.notelist[i].note + "\n \n";
				var str3 = "Author by" + this.notelist[i].author;
				return str1 + str2 + str3;			
			}
		}
		else{
			return "No note in archive"
		    }
		}
/**
 * Gets a note from the list of notes. 
 * @param {Number} note_id - a key with which the note object is fetched.
 * @retunrs {String} the note property of the note object. 
*/	
	this.getNote = function(note_id) {
	   //check if note_id is number and exist in index list
		if(this.notelist.hasOwnProperty(note_id)) {
			return this.notelist[note_id].note;
			}
		else{
			return "Invalid ID!!!"
			}
		}
/**
 * Searches through the list of note objects for a specified string and returns notes containing the text
 * @param {String} search_text - the string to search for.
 * @returns {String} returns the note object properties as string.
*/	
	this.search = function(search_text) {
		for(var note of this.notelist) {
			var n = note.note.includes(search_text);
			if(n) {
				var i = this.notelist.indexOf(note);
                var str = "Showing results for '"+ search_text + "'\n";
                var str1 = "Note ID: " + i  + "\n";
                var str2 = this.notelist[i].note + "\n\n";
                var str3 =  "Author by " + this.notelist[i].author;
                
                return(str + str1 + str2 + str3)
				}
			}
		}
/**
 * Deletes a note object from the list of notes by ID. 
 * @param {Number} note_id - a key with which the note object is fetched.
*/ 
	this.deleteNote = function(note_id){
		//check if note_id exist in index list
		if (this.notelist.hasOwnProperty(note_id)) {
			this.notelist.splice(note_id, 1);
			return "Note" + note_id + "successfully deleted \n";
			}
		else{
			return "Invalid ID!!!"
			}
		}
/**
 * Modifies a note from the list of notes. 
 * @param {Number} note_id - a key with which the note object is fetched.
 * @param {String} new_content - the content that replaces the specified note content.
*/
	this.edit = function(note_id, new_content) {
		//check if note_id exist in index list
		if (this.notelist.hasOwnProperty(note_id)) {
			this.notelist[note_id].note = new_content;
			return "Note " + note_id + " changed successfully";
			}
		else{
			return "Invalid ID!!!"
		}
	}
}