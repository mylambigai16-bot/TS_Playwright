import * as readline from "readline";
const re = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const pi = 3.14;
re.question("Enter radius: ", (input) => {
    const radius = Number(input);
    const area = pi * radius * radius;
    console.log("Area of circle =", area);
    re.close();
});
