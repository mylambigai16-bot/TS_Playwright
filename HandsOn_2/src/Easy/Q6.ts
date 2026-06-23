import PromptSync from "prompt-sync";

const prompt = PromptSync()
let count:number = 0

while(true){
    let num:number = Number(prompt("Enter the number: "))
    if(num >= 0){
        count += num
    for(let i=0; i<num ; i++){
        console.log("Hello")
    }
    }
    else
        break
}
console.log(count)