let age: number = Number(process.argv[2]);
let weight: number = Number(process.argv[3]);

if ((age >= 18 && age <= 55) && weight > 45) {
    console.log("Eligible for blood donation");
} else {
    console.log("Not eligible");
}