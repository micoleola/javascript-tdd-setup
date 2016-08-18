// NotesApplication class
module.exports = function() {
	this.notelist = [];		
	var Note = require('./notes.js');	
//create note_content and add to note list
	this.addNote = function(note) {
		if (note instanceof Note) {
		this.notelist.push(note);
			}
		}
//list notes function	
	this.listNotes = function() {
		for(var i = 0; i < this.notelist.length; i++) {
			console.log("Note ID:", i, "\n"+this.notelist[i].note, "\n \n"+"Author by", this.notelist[i].author,"\n");
			}
		}
//get note function	
	this.getNote = function(note_id) {
		//check if note_id exist in index list
		if (this.notelist.hasOwnProperty(note_id)) {
			console.log(this.notelist[note_id].note, "\n");
			}
		else{
			console.log("ID not found!!!")
			}
		}
//	create the text search function
	this.search = function(search_text) {
		for(var note of this.notelist) {
			var n = note.note.includes(search_text);
			if(n) {
				var i = this.notelist.indexOf(note);
				console.log("Showing results for '"+ search_text+"' \n");
				console.log("Note ID:", i);
				console.log(this.notelist[i].note, "\n");
				console.log("Author by", this.notelist[i].author, "\n");
				}
			}
		}
//function to delete note
	this.deleteNote = function(note_id){
		//check if note_id exist in index list
		if (this.notelist.hasOwnProperty(note_id)) {
			this.notelist.splice(note_id, 1);
			console.log("Note",note_id ,"successfully deleted \n")
			}
		else{
			console.log("ID not found!!!")
			}
		}
//function to edit note
	this.edit = function(note_id, new_content) {
		//check if note_id exist in index list
		if (this.notelist.hasOwnProperty(note_id)) {
			this.notelist[note_id].note = new_content;
			console.log("Note", note_id, "changed successfully \n")
			}
		else{
			console.log("ID not found!!!")
		}
	}
}