const Note = require("../models/notes");

module.exports.createOneNote = async (req, res)=>{
    
    const {title, content, category, id} = req.body;
    console.log({title, content, category, id})
    try {
        let note = await Note.findById(id);
        if(!note)
        {
            res.status(400).json({message:"bad Luck Not an Id for update"});
        }
        else{

            if(title)
            {
                note.title = title;
            }
            if(content)
            {
                note.content = content;
            }
            if(category)
            {
                note.category = category;
            }
            let updateNote = await Note.findByIdAndUpdate(id, {
                category,
                content,
                title: title
            }, {
                new: true
            })
            if(updateNote){
                res.json(updateNote);
            }else{
                res.status(500).json({
                    message:"Unable to update Note"
                });

            }
        }   
        
    } catch (err) {
        console.log(err)
        res.status(400).json({
            err
        });

    }
};