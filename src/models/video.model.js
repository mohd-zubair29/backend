import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema=new Schema({
    owner:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    videoFile:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,     //Cloudinary Url
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String
    },
    duration:{
        type:Number,
    },
    views:{
        type:Number,
        boolean:true,
    },
    isPublished:{
        type:String,
        boolean:true,
    }, 
     }, 
         {timestamps:true})

videoSchema.plugin("mongooseAggregatePaginate")
         export const Video= mongoose.model("Video", videoSchema);



         

	


	
// CLOUDINARY_URL=cloudinary://697957849113686:NRrRPXpERwgmxo5Nn9xTHmAL5m4@mohammeddzubair

