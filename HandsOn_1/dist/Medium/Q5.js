"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let str = prompt("Enter a string: ");
console.log(str.length);
console.log(str + str);
console.log(str[0]);
console.log(str.substring(0, 3));
//# sourceMappingURL=Q5.js.map