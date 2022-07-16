"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
const routes_1 = __importDefault(require("./routes")); // importing routes to use as a middleware
const express_1 = __importDefault(require("express")); // import express to work with APIs
const app = (0, express_1.default)(); // making an instance of express
exports.app = app;
const port = 8080; // initialzing the port
exports.port = port;
// setting up the server to listen on port 8080
app.listen(port, () => {
    console.log(`listening on port ${port}`); // printing out that the server is running successfilly
}); // end of the listen method
app.use("/api", routes_1.default); // using routes as a middleware with url /api
// adding a get method on url /
app.get("/", (req, res) => {
    res.send("Welcome to image resize app"); // sending a response from the server
});
