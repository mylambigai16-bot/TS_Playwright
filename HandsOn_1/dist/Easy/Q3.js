"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let n1 = Number(prompt("number1: "));
let n2 = Number(prompt("number2: "));
console.log("The sum: " + n1 + n2);
//# sourceMappingURL=Q3.js.map