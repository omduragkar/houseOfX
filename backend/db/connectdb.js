const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        const dbURI = process.env.mongoDB_URI;
        console.log({dbURI})
        const con = await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            });
        // console.log({con})
        console.log(`MongoDB connected @ ${con.connection.host}`)
    }catch(err)
    {
        console.error(`Error: ${err}`);
        process.exit();
    }

}
module.exports = connectDB;