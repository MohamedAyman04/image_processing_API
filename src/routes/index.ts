import express, { Request, Response } from "express"; // importing express for APIs
import { images } from "./api/images"; // import images to use as a middleware

// making an instance of express.Router
const routes = express.Router();

// making a get methond for routes
routes.get("/", (req: Request, res: Response): void => {
  res.send("Main api route"); // sending a response
});

routes.use("/images", images); // using images as a middleware with url /images

export default routes; // exporting routes to use as a middleware for the main app and testing
