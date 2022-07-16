import processImage from "../../utility/sharpProcessing";
import fs from "fs";
import path from "path";

describe("Image processing tests", (): void => {
  it("is image processing adding a certain file or not", (): void => {
    if (
      fs.existsSync(
        path.join(
          "assets",
          "processed_images",
          "encenadaport_processed_400_400.jpg"
        )
      )
    ) {
      fs.unlinkSync(
        path.join(
          "assets",
          "processed_images",
          "encenadaport_processed_400_400.jpg"
        )
      );
    }
    processImage("encenadaport", "400", "400");
    setTimeout((): void => {
      expect(
        fs.existsSync(
          path.join(
            "assets",
            "processed_images",
            "encenadaport_processed_400_400.jpg"
          )
        )
      ).toBe(true);
    }, 100);
  });
});
