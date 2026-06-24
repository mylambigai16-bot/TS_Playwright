let wages: number = Number(process.argv[2]);
let workDays: number = Number(process.argv[3]);

let salary: number = wages * workDays;

console.log("Salary: " + salary);