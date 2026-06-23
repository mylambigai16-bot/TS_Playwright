"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let input = prompt("Enter a list of product names separated by commas: ");
let products = input.split(",");
console.log("List of Products:");
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}
//# sourceMappingURL=Q4.js.map