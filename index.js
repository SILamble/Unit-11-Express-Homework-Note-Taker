// Requirements
const $noteTitle = $(".note-title");
const $noteText = $(".note-textarea");

//Event listeners for saving/viewing notes on notes.html
const $saveNote = $(".save-note");
$saveNote.on("click", savetoArray());

//Assign note to a const, then POST that note to the API 
function savetoArray(){
    const newNote = {
        title: $noteTitle.val(),
        text: $noteText.val(),
        id: Math.floor(Math.random() * 100),
    }
    return $.ajax({
        url: "/api/notes",
        data: newNote,
        method: "POST"
      });
}

module.exports = index