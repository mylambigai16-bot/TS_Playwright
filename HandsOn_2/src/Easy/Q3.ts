let char: string = process.argv[2]!.toLowerCase();

if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'
) {
    console.log(`${char} is a vowel`);
} else if (char >= 'a' && char <= 'z') {
    console.log(`${char} is a consonant`);
} else {
    console.log(`${char} is a symbol`);
}