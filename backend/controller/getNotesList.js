const Note = require("../models/notes");

module.exports.getNotes = async (req, res)=>{
    try {
        const page = req.query.page; // the page number you want to retrieve
        const limit = 5; // the number of documents you want to retrieve per page
        const skip = (page - 1) * limit; // calculate the number of documents to skip
        const count= await Note.countDocuments({});
        const notes= await Note.find().skip(skip).limit(limit);
        const totalPages = Math.ceil(count / limit);
        const nextPage = (page < totalPages) ? (parseInt(page) + 1): null;
        
        console.log({notes, nextPage})
        res.json({notes, nextPage});
    } catch (err) {
        res.status(400).json({message:`Server Error in making Notes :-( ${err.message}`});        
    }
}
