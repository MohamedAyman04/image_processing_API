import { app } from "../.."; // importing app
import supertest from "supertest"; // importing supertest

// adding a new suite for routes
describe("Testing routes API", (): void => {
  // testing the route api
  it("tests if the route api returns status of 200", async (done): Promise<void> => {
    const res = await supertest(app).get("/api");
    expect(res.statusCode).toEqual(200);
    done();
  });
  // tests if there is a bad request
  it("tests if there is a bad request", async (done): Promise<void> => {
    const res = await supertest(app).get("/api");
    expect(res.badRequest).toBe(false);
    done();
  });
});
