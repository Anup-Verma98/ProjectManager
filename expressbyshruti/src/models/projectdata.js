const mongoose=require("mongoose");
const ProjectData=new mongoose.Schema({
    projectname:{
        type:String,
        required:true
    },
    projectdesccription:{
        type:String

    },
    membersName:
    {
    }
})