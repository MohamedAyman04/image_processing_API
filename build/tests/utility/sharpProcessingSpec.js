"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharpProcessing_1 = __importDefault(require("../../utility/sharpProcessing"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
describe("Image processing tests", () => {
    it("is image processing adding a certain file or not", () => {
        if (fs_1.default.existsSync(path_1.default.join("assets", "processed_images", "encenadaport_processed_400_400.jpg"))) {
            fs_1.default.unlinkSync(path_1.default.join("assets", "processed_images", "encenadaport_processed_400_400.jpg"));
        }
        (0, sharpProcessing_1.default)("encenadaport", "400", "400");
        setTimeout(() => {
            expect(fs_1.default.existsSync(path_1.default.join("assets", "processed_images", "encenadaport_processed_400_400.jpg"))).toBe(true);
        }, 100);
    });
});
