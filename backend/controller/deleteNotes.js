const Note = require("../models/notes");

module.exports.updateNotes = async (req, res)=>{
    try {
        let note = await Note.findOne({_id:req.body.id});
        
        if(note)
        {
            let deleteNote = await Note.deleteOne({_id:note._id});
            if(deleteNote){
                res.json({
                    "message":"Note Removed!",
                    id:note._id
                });
            }else{
                
                res.json({
                    "message":"Unable to delete Note!"
                });
            }
        }
        else{
            res.status(401);
            throw new Error("You can't Perform This actions!");
        }
    } catch (err) {
        res.status(404).json({message:`Server Error in making Notes :-( ${err.message}`});        
    
    }
};

