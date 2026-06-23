import PromptSync from "prompt-sync";

const prompt = PromptSync()
let nu: number = Number(prompt('Enter the number: '))
let re:number
let digit_sum = 0 
while(nu != 0){
    re = nu % 10
    digit_sum += re
    nu = Math.floor(nu / 10)
}

console.log("Sum of the digit is: "+digit_sum)