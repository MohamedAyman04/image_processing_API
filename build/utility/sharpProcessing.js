"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
// creating a function for image processing
const processImage = (filename, width, height) => {
    // returning void
    (0, sharp_1.default)(path_1.default.join("assets", "images", `${filename}.jpg`)) // adding the path
        .resize(Number(width), Number(height)) // resizing
        .toFile(
    // saving to file
    path_1.default.join("assets", "processed_images", `${filename}_processed_${width}_${height}.jpg`), // saving the image to a directory
    (error) => {
        // handling errors
        if (error != null)
            // see if the error is not null to print it out
            console.log("error", error); // printing out the error if there is any
    } // end of the error callback function);
    );
};
exports.default = processImage; // exporting to use in testing
