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
const index_1 = require("../index"); // importing app and port
const supertest_1 = __importDefault(require("supertest")); // importing supertest
// adding a new suite for the server
describe("the server is working", () => {
    // tests if the port is 8080
    it("tests if the port is the one we are using", () => {
        expect(index_1.port).toEqual(8080);
    });
    // tests if the app is truthy
    it("tests if the app is truthy", () => {
        expect(index_1.app).toBeTruthy();
    });
    // tests if the endpoint is fine
    it("tests if the endpoint has status of 200", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).get("/");
        expect(res.statusCode).toEqual(200);
        done();
    }));
});
