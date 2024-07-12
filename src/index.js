// require('dotenv').config({
//     path: './env'
// })

import connectDb from "./db/index.js";
import dotenv from "dotenv";    // to import like this >> package.json>> scripts >> in your start script add nodemon -r dotenv/config --experimental-json-modules index.js


dotenv.config({
    path: './env'
});


connectDb();









    //  Approach - 1 (using IIFE function) :  IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop.
    //  ( function () {} )()

// const app = express();
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Error :" ,error);
//         })

//         app.listen(`${process.env.PORT}`, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);})
//     } catch (error) {
//         console.log('Error: ', error);
//     }
// } )()
