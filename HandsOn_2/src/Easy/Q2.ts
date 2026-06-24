let num: number = Number(process.argv[2]);

if (num % 7 === 0) {
    console.log(`Yes the num ${num} is divisible by 7`);
} else {
    console.log(`No the num ${num} is not divisible by 7`);
}