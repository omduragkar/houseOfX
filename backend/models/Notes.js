const mongoose = require('mongoose');
const notes = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,    
    },
    category:{
        type:String,
        required:true,    
    }
}, {
    timestamps: true,
});


const Note = mongoose.model("Note", notes);
module.exports = Note; 