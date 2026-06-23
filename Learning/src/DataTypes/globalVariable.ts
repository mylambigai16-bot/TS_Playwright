const globalVar:String = "I'm Global";

function ex(): void{
    //globalVar = "I'm local now"
    console.log(globalVar);
}

ex();