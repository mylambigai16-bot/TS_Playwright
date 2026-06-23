import PromptSync from "prompt-sync";

const prompt = PromptSync()
let val:number = Number(prompt("Enter the number: "))

for(let i:number=1; i<=val ; i++){
    for( let j=1; j<=i ; j++){
        process.stdout.write(i.toString() + " ")
    }
    console.log()
}