"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // importing express for APIs
const images_1 = require("./api/images"); // import images to use as a middleware
// making an instance of express.Router
const routes = express_1.default.Router();
// making a get methond for routes
routes.get("/", (req, res) => {
    res.send("Main api route"); // sending a response
});
routes.use("/images", images_1.images); // using images as a middleware with url /images
exports.default = routes; // exporting routes to use as a middleware for the main app and testing
