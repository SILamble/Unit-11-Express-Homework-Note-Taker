// Requirements
const express = require("express");
const path = require("path");
// Express const's
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTML routes
//Displays index
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
//Displays notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//API routes
    //POST notes
app.post("/api/notes", function(req, res) {
    const newNote = req.body;
    console.log(newNote);
    notes.push(newNote);
    res.json(newNote);
  });

    //GET Notes
app.get("/api/notes", function(req, res) {
    for (var i = 0; i < notes.length; i++) {
        return res.json(notes[i]);
    } return res.json(false);
    });


//Check if Server working
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });