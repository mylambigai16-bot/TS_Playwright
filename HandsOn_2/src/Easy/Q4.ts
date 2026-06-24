let num: number = Number(process.argv[2]);
let sum:number = 0
let c:number = 1
while(c<=num){
    sum+=c
    c++
}

console.log("The sum of given number: "+sum)
