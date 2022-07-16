import routes from "./routes"; // importing routes to use as a middleware
import express, { Request, Response } from "express"; // import express to work with APIs

const app = express(); // making an instance of express
const port = 8080; // initialzing the port

// setting up the server to listen on port 8080
app.listen(port, (): void => {
  console.log(`listening on port ${port}`); // printing out that the server is running successfilly
}); // end of the listen method

app.use("/api", routes); // using routes as a middleware with url /api

// adding a get method on url /
app.get("/", (req: Request, res: Response): void => {
  res.send("Welcome to image resize app"); // sending a response from the server
});

export { app, port }; // exporting app and port for testing
