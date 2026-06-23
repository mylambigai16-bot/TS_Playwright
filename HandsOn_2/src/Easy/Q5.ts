import PromptSync from "prompt-sync";

const prompt = PromptSync();
let i:number 
let j:number
let output:String = ""
for(i=97,j=122; i<=122; i++,j--){
    output += (String.fromCharCode(i)+String.fromCharCode(j))+" "
}
console.log(output)