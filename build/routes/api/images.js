"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flag = exports.images = void 0;
const express_1 = __importDefault(require("express")); // importing express to activate the API
const fs_1 = __importDefault(require("fs")); // imoprting the file system to check if the image is already processed
const path_1 = __importDefault(require("path")); // importing path to deal with paths
const sharpProcessing_1 = __importDefault(require("../../utility/sharpProcessing")); // importing processImage which handles image processing
// making images an express router to use as a middleware
const images = express_1.default.Router();
exports.images = images;
let flag = true;
exports.flag = flag;
// adding the get method with the url / to handle the image processing functionality
images.get("/", (req, res) => {
    const params = req.query; // making a variable that holds the request query
    console.log(params.filename, params.width, params.height); // printing out the url parameters to check that everything is fine
    if (!fs_1.default.existsSync(path_1.default.resolve(path_1.default.join("assets", "images", `${params.filename}.jpg`)))) {
        // checking if the image doesn't exist
        return res.send("sorry image not found"); // returning a respose of image not found
    }
    if (fs_1.default.existsSync(path_1.default.resolve(path_1.default.join("assets", "processed_images", `${params.filename}_processed_${params.width}_${params.height}.jpg`)))) {
        // checking if the file already exists or not
        console.log("already exits"); // printing out already exits
        return res.sendFile(path_1.default.resolve(path_1.default.join("assets", "processed_images", `${params.filename}_processed_${params.width}_${params.height}.jpg`))); // returing the response so it won't reprocess using sharp
    }
    else {
        try {
            // else if it doesn't exist
            (0, sharpProcessing_1.default)(
            // calling processImage which handles image processing
            params.filename, params.width, params.height);
            exports.flag = flag = true;
            setTimeout(() => {
                // adding setTimeout for the response to send the image file
                return res.sendFile(path_1.default.resolve(path_1.default.join("assets", "processed_images", `${params.filename}_processed_${params.width}_${params.height}.jpg`))); // returning a response of the image processed
            }, 100); // 100ms delay
        }
        catch (error) {
            return res.send("sorry an error occured");
        }
    }
}); // end of the get python
