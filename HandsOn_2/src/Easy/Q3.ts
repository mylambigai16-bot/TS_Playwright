import PromptSync from "prompt-sync";
const prompt = PromptSync();

let char: string = prompt("Enter the character: ");
char = char.toLowerCase()
let code: number = char.charCodeAt(0);
switch (true) {
    case (code >= 0 && code <= 9):
        console.log(`${char} is a number`);
        break;
    case (char == 'a'  || char == 'e' || char == 'i' || char == 'o' || char == 'u'):
        console.log(`${char} is a vowel`);
        break;
    case (code >= 97 && code <= 122):
        console.log(`${char} is a consonant`);
        break
    default:
        console.log(`${char} is a symbol`);
}
