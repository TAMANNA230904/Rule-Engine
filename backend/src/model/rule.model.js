import mongoose,{Schema} from "mongoose";

const ruleSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        index:true
    },
    ast: {
        type: Schema.Types.Mixed, // Use Mixed type to store complex structures
        required: true
    }
     
},{timestamps:true})

export const Rule=mongoose.model("Rule",ruleSchema)