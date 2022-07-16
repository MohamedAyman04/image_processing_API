import express, { Request, Response } from "express"; // importing express to activate the API
import fs from "fs"; // imoprting the file system to check if the image is already processed
import path from "path"; // importing path to deal with paths
import processImage from "../../utility/sharpProcessing"; // importing processImage which handles image processing

// making images an express router to use as a middleware
const images = express.Router();
let flag = true;

// adding the get method with the url / to handle the image processing functionality
images.get("/", (req: Request, res: Response): void => {
  const params = req.query; // making a variable that holds the request query
  console.log(params.filename, params.width, params.height); // printing out the url parameters to check that everything is fine
  if (
    !fs.existsSync(
      path.resolve(path.join("assets", "images", `${params.filename}.jpg`))
    )
  ) {
    // checking if the image doesn't exist
    res.send("sorry image not found"); // sending a respose of image not found
    return; // returning
  }
  if (
    fs.existsSync(
      path.resolve(
        path.join(
          "assets",
          "processed_images",
          `${params.filename}_processed_${params.width}_${params.height}.jpg`
        )
      )
    )
  ) {
    // checking if the file already exists or not
    console.log("already exits"); // printing out already exits
    return res.sendFile(
      path.resolve(
        path.join(
          "assets",
          "processed_images",
          `${params.filename}_processed_${params.width}_${params.height}.jpg`
        )
      )
    ); // returing the response so it won't reprocess using sharp
  } else {
    try {
      // else if it doesn't exist
      processImage(
        // calling processImage which handles image processing
        params.filename as unknown as string,
        params.width as unknown as string,
        params.height as unknown as string
      );
      flag = true;
      setTimeout((): void => {
        // adding setTimeout for the response to send the image file
        return res.sendFile(
          path.resolve(
            path.join(
              "assets",
              "processed_images",
              `${params.filename}_processed_${params.width}_${params.height}.jpg`
            )
          )
        ); // returning a response of the image processed
      }, 100); // 100ms delay
    } catch (error) {
      res.send("sorry an error occured"); // sending a response
      return; // returning
    }
  }
}); // end of the get python

export { images, flag }; // exporting images for testing
