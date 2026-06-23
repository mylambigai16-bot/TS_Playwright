import PromptSync from "prompt-sync";

const prompt = PromptSync();
let num:number = Number(prompt("Enter the number: "));
if(num%7 == 0){
    console.log(`Yes the num ${num} is divisible by 7`)
}