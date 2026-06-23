function def(a:number, ...b:number[]){
    let res = 0
    for(var i=0; i<b.length; i++){
        res += b[i]
    }
     
}

def(1,2)
def(1,2,3,4,5)