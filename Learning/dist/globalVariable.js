"use strict";
const globalVar = "I'm Global";
function ex() {
    //globalVar = "I'm local now"
    console.log(globalVar);
}
ex();
