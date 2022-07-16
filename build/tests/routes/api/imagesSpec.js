"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../.."); // importing app for testing
const images_1 = require("../../../routes/api/images"); // importing flag from images.ts
const supertest_1 = __importDefault(require("supertest")); // importing supertest
const path_1 = __importDefault(require("path")); // importing path
const fs_1 = __importDefault(require("fs")); // importing file system
// adding a new suite for images
describe("testing the images API", () => {
    // tests if the images endpoint is working
    it("tests the images endpoint if the status code is 200", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(__1.app).get("/api/images");
        expect(res.statusCode).toEqual(200);
        done();
    }));
    // tests if there is a bad request
    it("tests if there is a bad request in images endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(__1.app).get("/api/images");
        expect(res.badRequest).toBe(false);
    }));
    // tests if the image processing is working
    it("tests image processing by flag", () => {
        expect(images_1.flag).toBe(true);
    });
    // tests if the processed_images exists that stores the pre-processed images
    it("tests if image_processed dir is here for storing the processed images", () => {
        expect(fs_1.default.existsSync(path_1.default.resolve(path_1.default.join("assets", "processed_images")))).toBe(true);
    });
});
