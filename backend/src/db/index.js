import mongoose from "mongoose"
const connectDB= async()=>{
   try{
    const connectionInstance= await mongoose.connect("mongodb+srv://tamannasheikh2304:tamanna@cluster0.rs0fn.mongodb.net")
    console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);

   }catch(error){
    console.log("MONGODB connection error",error);
    process.exit(1)
   }
}

export default connectDB
