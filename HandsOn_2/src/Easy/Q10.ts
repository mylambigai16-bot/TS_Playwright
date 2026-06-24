let val: number = Number(process.argv[2]);

for(let i:number=1; i<=val ; i++){
    for( let j=1; j<=i ; j++){
        process.stdout.write(i.toString() + " ")
    }
    console.log()
} 