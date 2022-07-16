import { app } from "../../.."; // importing app for testing
import { flag } from "../../../routes/api/images"; // importing flag from images.ts
import supertest from "supertest"; // importing supertest
import path from "path"; // importing path
import fs from "fs"; // importing file system

// adding a new suite for images
describe("testing the images API", (): void => {
  // tests if the images endpoint is working
  it("tests the images endpoint if the status code is 200", async (done): Promise<void> => {
    const res = await supertest(app).get("/api/images");
    expect(res.statusCode).toEqual(200);
    done();
  });
  // tests if there is a bad request
  it("tests if there is a bad request in images endpoint", async (): Promise<void> => {
    const res = await supertest(app).get("/api/images");
    expect(res.badRequest).toBe(false);
  });
  // tests if the image processing is working
  it("tests image processing by flag", (): void => {
    expect(flag).toBe(true);
  });
  // tests if the processed_images exists that stores the pre-processed images
  it("tests if image_processed dir is here for storing the processed images", (): void => {
    expect(
      fs.existsSync(path.resolve(path.join("assets", "processed_images")))
    ).toBe(true);
  });
});
