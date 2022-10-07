const express = require('express');
//const mongoose = require('mongoose');
const app = express();


/*const connectDB = async() =>{
    await mongoose.connect("mongodb://localhost:27017/ppl2",
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });

        console.log("MongoDB Connected");
}

connectDB();

const AdminSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:[true, "Please provide a username"]
    },
    lastname:{
        type: String,
        required:[true, "Please provide a lastname"]
    },
})   

const Admin = mongoose.model("Admin",AdminSchema);


const tyme = async()=>{
try {
    const admin = await Admin.create({
        firstname:"test", lastname:"test"
    })
 
} catch (error) {
    res.status(201).json(error);
}
}

tyme();*/
app.get('/',(req,res)=>{
    
    res.json({
        msg:'Hello from the Backend'
    })
});

app.listen(3000);