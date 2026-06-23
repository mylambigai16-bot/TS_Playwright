import PromptSync from "prompt-sync";

const prompt = PromptSync()
let char:String = prompt("Enter the character: ")
char = char.toLowerCase()
if(char >= 'a' && char <= 'z'){
    console.log("Given character is a Albhabet")
}
else if(char >= '0' && char <= '9'){
    console.log("Given character is Digit")
}
else{
    console.log("Given character is a special symbol")
}
    