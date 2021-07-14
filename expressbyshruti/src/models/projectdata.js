const mongoose=require("mongoose");
const ProjectData=new mongoose.Schema({
    projectname:{
        type:String,
        required:true
    },
    projectdesccription:{
        type:String

    },
    member1:
    {
        type:String,
        requiredd:true
    },

    member2:
    {
        type:String,
        
    },
    member3:
    {
        type:String,
 
    },
    member4:{
        type:String
    }
})