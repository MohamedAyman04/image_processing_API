import { app, port } from "../index"; // importing app and port
import supertest from "supertest"; // importing supertest

// adding a new suite for the server
describe("the server is working", (): void => {
  // tests if the port is 8080
  it("tests if the port is the one we are using", (): void => {
    expect(port).toEqual(8080);
  });
  // tests if the app is truthy
  it("tests if the app is truthy", (): void => {
    expect(app).toBeTruthy();
  });
  // tests if the endpoint is fine
  it("tests if the endpoint has status of 200", async (done): Promise<void> => {
    const res = await supertest(app).get("/");
    expect(res.statusCode).toEqual(200);
    done();
  });
});
