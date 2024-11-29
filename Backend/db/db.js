import mongoose from "mongoose";

export const connectToDb=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to DB succuessfully")
    }).catch(err=>console.log(err));
}