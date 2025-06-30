
let taskText=document.getElementById("taskInput")

let list=document.getElementById("taskList")

function resetFunc(){
    window.location.reload()
}
function addTask(){
    let taskInput=taskText.value.trim()
    if(taskInput===""){
        alert("enter any task")
        return;
    }
    let button=document.createElement("button")
    let li=document.createElement("li")
    let span=document.createElement("span")      
    span.innerHTML='<i>&nbsp &nbsp</i><i class="fa-solid fa-pencil"></i><i>&nbsp &nbsp</i>' + taskInput
    button.textContent="completed"
    span.appendChild(button)
    li.appendChild(span)
    li.appendChild(button)
    list.appendChild(li)
        button.onclick=function(){
        li.remove()
    }        
    taskText.value=""
}