import processImage from "../../utility/sharpProcessing";
import fs from "fs";
import path from "path";

// testing image processing
describe("Image processing tests", (): void => {
  it("is image processing adding a certain file or not", (): void => {
    if (
      // checking if a file is already saved
      fs.existsSync(
        path.join(
          "assets",
          "processed_images",
          "encenadaport_processed_400_400.jpg"
        )
      )
    ) {
      fs.unlinkSync(
        // deleting it if it exists
        path.join(
          "assets",
          "processed_images",
          "encenadaport_processed_400_400.jpg"
        )
      );
    }
    processImage("encenadaport", "400", "400"); // calling the function processImage to process the image and create the file
    setTimeout((): void => {
      expect(
        fs.existsSync(
          path.join(
            "assets",
            "processed_images",
            "encenadaport_processed_400_400.jpg"
          )
        )
      ).toBe(true); // testing if it exists ot not
    }, 100);
  });
});
