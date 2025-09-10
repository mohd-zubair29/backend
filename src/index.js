
// import mongoose from "mongoose";
// import { DB_NAME} from "./constant";
import dotenv from 'dotenv';
import connectDb from "./db/index.js";


dotenv.config({
    path:'./env'
})
connectDb()
.then(()=>{
    app.listen(process.env.PORT, `app is Listening at Port${process.env.PORT}`);
})
.catch((error)=>{
    console.log("MongoDb Connection Failed", error);
})















// (async ()=>{
// try{
//   await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
//   console.log("MONGODB IS CONNECTED");

// app.listen(`${process.env.PORT}, ()=>{
//     console.log("App Is Listening At", ${process.env.PORT} )}`);
// }
// catch(error){
//  console.log("ERROR", error);
// }
// })()