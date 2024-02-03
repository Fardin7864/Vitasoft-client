import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

          
cloudinary.config({ 
  cloud_name: dh20zdtys, 
  api_key: 576695125461462, 
  api_secret: M37tipUsuMyD9TVuDCnsxIFHcR8 
});

const uploadOnCloydinary = async (localFilePath) =>{
    try {
        if (!localFilePath) return null;
       const respons = await cloudinary.uploader.upload(localFilePath,{
            resource_type: 'auto'
        })
        // console.log("file is uploaded on cloudinary", respons.url)
        fs.unlinkSync(localFilePath)
        return respons;
    } catch (error) {
        fs.unlinkSync(localFilePath) //removed the locally saved temporary file 
        return null;
    }
}


export {uploadOnCloydinary}