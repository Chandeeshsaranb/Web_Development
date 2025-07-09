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

function drawBoard(n){

console.log(document.getElementById("1").innerHTML + document.getElementById("2").innerHTML + document.getElementById("3").innerHTML)

}