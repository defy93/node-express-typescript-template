import express from "express";
import dotenv from "dotenv";

// Init!
dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();


// Random temp boiler plate for now.
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.json( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );