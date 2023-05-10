const Note = require("../models/notes");




module.exports.addNotes = async (req, res)=>{
    const {title, category, content } = req.body;
    try {
        
        let notes = await Note.create({
            title,
            category,
            content
        })
        res.status(200);
        res.json(notes);

    } catch (err) {
        res.status(400).json({message:`Server Error in making Notes :-( ${err.message}`});        
    
    }
    
}








