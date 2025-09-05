import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDb=async()=>{
   try {
   const connectioninstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
   console.log(`SUCCESSFULLY CONNECTED TO DATABASE ${connectioninstance.connection.host}`);
   } catch (error) {
    console.log("MONGODB connection FAILED TO CONNECT", error);
   }
}

export default connectDb;