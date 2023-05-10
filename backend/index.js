const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require("./db/connectdb");
var cors = require('cors');
const routes= require('./routes/index');

dotenv.config();

app.use(cors());
app.use(express.json());

connectDB();


app.use("/api", routes);


const port = process.env.PORT || 4000 ;

app.listen(port, (err)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    else
    {
        console.log(`Server Started at port ${port}`);
    }
})