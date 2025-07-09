//toggle user
let user1="X";
let user2="O";
let user=""

let flag=0;


function drawBoard(n){
    if(flag){
    user=user1
}
else{
    user=user2
}
flag=!flag
    document.getElementById(n).innerHTML=user
    console.log(n)
}

