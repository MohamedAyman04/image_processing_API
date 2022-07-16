import sharp from "sharp";
import path from "path";

// creating a function for image processing
const processImage = (
  filename: string,
  width: string,
  height: string
): void => {
  // returning void
  sharp(path.join("assets", "images", `${filename}.jpg`)) // adding the path
    .resize(Number(width), Number(height)) // resizing
    .toFile(
      // saving to file
      path.join(
        "assets",
        "processed_images",
        `${filename}_processed_${width}_${height}.jpg`
      ), // saving the image to a directory
      (error): void => {
        // handling errors
        if (error != null)
          // see if the error is not null to print it out
          console.log("error", error); // printing out the error if there is any
      } // end of the error callback function);
    );
};

export default processImage; // exporting to use in testing
