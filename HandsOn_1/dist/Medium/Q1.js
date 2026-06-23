"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let weight = Number(prompt("Weight: "));
let height = Number(prompt("Height: "));
let bmi = weight / (height * height);
console.log("BMI: " + bmi.toFixed(2));
//# sourceMappingURL=Q1.js.map