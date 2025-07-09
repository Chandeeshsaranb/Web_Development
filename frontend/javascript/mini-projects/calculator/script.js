let d = document.getElementById("display")
let cstr = ['0','0','0']
function calculations(obj) {
    d.innerHTML = obj
    cstr += obj;    
}

function answer() {
    let operation = cstr[1]
    if (operation == "+") {
        d.innerHTML = Number(cstr[0]) + Number(cstr[2])
    }
    else if (operation == "-") {
        d.innerHTML = Number(cstr[0]) - Number(cstr[2])
    }
    else if (operation == "*") {
        d.innerHTML = Number(cstr[0]) * Number(cstr[2])
    }
    else {
        d.innerHTML = Number(cstr[0]) / Number(cstr[2])
    }
    cstr = ""
}

function cclear() {
    cstr = '';
    d.innerHTML = cstr;

}