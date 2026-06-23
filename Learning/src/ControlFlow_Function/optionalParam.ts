function opt(id:number, name:String, email_id?:String){
    console.log("ID: "+id+" Name: "+name)
    if(email_id != undefined){
        console.log("Email id: "+email_id)
    }
}

opt(56, "Myl")
opt(57, "Mugan","mugam@gmail.com") 