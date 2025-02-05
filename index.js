import express from 'express'; // A framework used to perform the BE server operations from Node.js
import bodyParser from 'body-parser'; // Middleware used to parse the body data received from the client
import bankingRoutes from './routes/bankingRoutes.js'; // Import the router module

// Define the express application
const app = express(); // Instance of the express app --> main server object
app.use(bodyParser.json()); // Enable bodyparser to read the JSON data

const port = 3000;

// Use the router for all banking routes
app.use('/api', bankingRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); // Starts the express server on top of port 3000
