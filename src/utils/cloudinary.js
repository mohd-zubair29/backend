import { v2 } from "cloudinary";
import fs from 'fs';

cloudinary.config({
    Cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    API_key:process.env.CLOUDINARY_API_KEY,
    API_secret:process.env.CLOUDINARY_API_SECRET,

})


const cloudUpload= async(localUploadPath)=>{
    try {
        if(!localUploadPath) return null;

     const response= await cloudinary.uploader.upload(localUploadPath, {
        resource_type:"auto"
       })
       console.log("File Is SccessFully Uploaded On Cloudinary", response.url);
       return response;
    } catch (error) {
        fs.unlinkSync(localUploadPath);
        //remove the file from the server to cloudinary or if any error occurs then it will resolved
    }
}


export {cloudUpload}