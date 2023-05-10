const express = require("express");
const { addNotes } = require("../controller/createNoteController");
const { createOneNote } = require("../controller/updateNotesController");
const { getOneNote } = require("../controller/getSingleNote");
const { getNotes } = require("../controller/getNotesList");
const { updateNotes } = require("../controller/deleteNotes");

const router = express.Router();


router.get("/", (req, res)=>{
    res.status(200).send("Welcome to Backend APIs of ONOTIS V3")
})
router.get("/getNotes",getNotes);
router.post("/createNote", addNotes)
router.post("/updateNote", createOneNote)
router.get("/getSingleNote", getOneNote)
router.post("/deleteNote", updateNotes)

module.exports = router;