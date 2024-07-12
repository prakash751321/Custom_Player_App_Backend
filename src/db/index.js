import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const  connectDb = async () => {
    try {
        const connInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected ! DB Host: ${connInstance.connection.host} \n Connection: ${connInstance.connection.name} 
                     \n Id: ${connInstance.connection.id} \n Database: ${DB_NAME}`);
    } catch (error) {
        console.log('Error: ', error);
        process.exit(1);
    }
}

export default connectDb;