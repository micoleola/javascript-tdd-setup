/**
 * Note Class to define a Note object.
 * @param {String} note - the content of the note.
 * @param {String} author - the author of the note. 
 * @constructor
  */
module.exports = function(note, author) {
		this.note = note;
		this.author = author;
}