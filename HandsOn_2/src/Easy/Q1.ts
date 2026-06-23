import PromptSync from "prompt-sync"
const prompt = PromptSync();
let wages:number = Number(prompt("Enter wages amount: "));
let work_days:number = Number(prompt("Enter working days: "));
let salary:number = wages * work_days;
console.log("Salary: "+salary)
