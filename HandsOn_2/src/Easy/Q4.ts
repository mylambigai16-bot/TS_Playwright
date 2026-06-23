import PromptSync from "prompt-sync";

const prompt = PromptSync();
let num:number = Number(prompt("Enter the number: "))
let sum:number = 0
let c:number = 1
while(c<=num){
    sum+=c
    c++
}

console.log("The sum of given number: "+sum)
