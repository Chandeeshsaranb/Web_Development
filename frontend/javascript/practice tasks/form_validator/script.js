
function Toggle(){
    let ans=document.getElementById("passInput")
    if(ans.type=="password"){
        ans.type="text"
    }
    else{
        ans.type="password"
    }
}


function expCheck(){
    let rx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let mail=document.getElementById("mailInput").value
    if(rx.test(mail)){
        document.getElementById("mailWarning").innerHTML=""
        document.getElementById("form_container").style.height="50vh"
    }
    else{
        document.getElementById("mailWarning").innerHTML="*enter a valid email address"
        document.getElementById("form_container").style.height="60vh"
    }
}