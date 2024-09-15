import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";




 const connectDB = async () =>{
    try {
      const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);


      console.log(` \n MongoDB Connected!  Host : ${connectInstance.connection.host} \n`);
      
    }catch(error){
        console.log("Error connecting to DB", error);
        process.exit(1);
    }
 }

 export default connectDB;