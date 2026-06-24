let char: string = process.argv[2]!.toLowerCase();

if (char >= 'a' && char <= 'z') {
    console.log("Given character is an Alphabet");
} else if (char >= '0' && char <= '9') {
    console.log("Given character is a Digit");
} else {
    console.log("Given character is a Special Symbol");
}