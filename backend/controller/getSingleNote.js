const Note = require("../models/notes");

module.exports.getOneNote =async (req, res)=>{
    try {
        const notes= await Note.findOne({_id:req.params.id});
        console.log(notes.user.toString())
        // console.log(notes.user.toString().equals(req.user._id))
        // console.log(notes.user.toString() === (req.user._id))
        // console.log(notes.user.toString() == (req.user._id))
        if(notes)
        {
            res.json(notes);
        }
        else{
            res.status(400);
        }
    } catch (err) {
        res.status(400).json({message:`Server Error in making Notes :-( ${err.message}`});        
    
    }

}