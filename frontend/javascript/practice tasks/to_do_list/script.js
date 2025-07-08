
let taskText = document.getElementById("taskInput")

let list = document.getElementById("taskList")

function resetFunc() {
    window.location.reload()
}
function addTask() {
    let taskInput = taskText.value.trim()
    if (taskInput === "") {
        alert("enter any task")
        return;
    }
    let button = document.createElement("button")
    let edit = document.createElement("button")
    let li = document.createElement("li")
    let span = document.createElement("span")
    let span1 = document.createElement("span")

    span.innerHTML = '<i>&nbsp &nbsp</i><i class="fa-solid fa-pencil"></i><i>&nbsp &nbsp</i>' + taskInput
    button.textContent = "Delete"
    edit.textContent = "Edit"
    // edit.onclick=function(){ 
    //     let ubtn=document.getElementById("taskAddButton")
    //     document.getElementById("taskInput").value=taskInput
    //     ubtn.innerHTML="Update"
    //     ubtn.onclick=function(){

    //         ubtn.innerHTML="ADD"
    //         document.getElementById("taskInput").value=""
    //     }
    // }



    li.appendChild(span)
    li.appendChild(edit)
    li.appendChild(button)
    list.appendChild(li)
    button.onclick = function () {
        li.remove()
    }
    edit.onclick = function () {
        document.getElementById("taskInput").value = taskInput
        let update = document.createElement("button")
        let addb = document.getElementById("taskAddButton")
        update.textContent = "UPDATE"
        update.style.padding = "10px"
        document.getElementById("div").replaceChild(update, addb)
        // document.getElementById("div").appendChild(update)
        update.onclick = function () {
            let ans = document.getElementById("taskInput").value
            span1.innerHTML = '<i>&nbsp &nbsp</i><i class="fa-solid fa-pencil"></i><i>&nbsp &nbsp</i>' + ans
            console.log(span1)
            li.replaceChild(span1, span)
            document.getElementById("taskInput").value = ""
            //  document.getElementById("div").removeChild(update)
            document.getElementById("div").replaceChild(addb, update)
        }

    }



    // edit.onclick=function(){
    //         let val=prompt("enter the updated task")
    //         span1.innerHTML='<i>&nbsp &nbsp</i><i class="fa-solid fa-pencil"></i><i>&nbsp &nbsp</i>' + val
    //         console.log(span1)
    //         li.replaceChild(span1,span)
    //     }



    taskText.value = ""
}