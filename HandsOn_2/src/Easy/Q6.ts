let count: number = 0;

for (let i: number = 2; i < process.argv.length; i++) {

    let num: number = Number(process.argv[i]);

    if (num < 0) {
        break;
    }

    count += num;

    for (let j: number = 0; j < num; j++) {
        console.log("Hello");
    }
}

console.log("Sum = " + count);