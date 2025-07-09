//toggle user
let user1="X";
let user2="O";
let user=""

let flag=1;


function drawBoard(n){
    if(flag){
    user=user1
        
    document.getElementById(n).removeAttribute('onclick')
}
else{
    user=user2
    document.getElementById(n).removeAttribute('onclick')
}
flag=!flag
    document.getElementById(n).innerHTML=user
    console.log(n)

winnerCheck()
}


function winnerCheck(){
    for(let i=1;i<9;i++)
    {
        let ans=""

        switch(i){
            case 1:
                ans=document.getElementById("1").innerHTML + document.getElementById("2").innerHTML + document.getElementById("3").innerHTML;
                break;

            case 2:
                ans=document.getElementById("4").innerHTML + document.getElementById("5").innerHTML + document.getElementById("6").innerHTML;
                break;
            
            case 3:
                ans=document.getElementById("7").innerHTML + document.getElementById("8").innerHTML + document.getElementById("9").innerHTML;
                break;
                
            case 4:
                ans=document.getElementById("1").innerHTML + document.getElementById("4").innerHTML + document.getElementById("7").innerHTML;
                break;

            case 5:
                ans=document.getElementById("2").innerHTML + document.getElementById("5").innerHTML + document.getElementById("8").innerHTML;
                break;
            
            case 6:
                ans=document.getElementById("3").innerHTML + document.getElementById("6").innerHTML + document.getElementById("9").innerHTML;
                break;

            case 7:
                ans=document.getElementById("1").innerHTML + document.getElementById("5").innerHTML + document.getElementById("9").innerHTML;
                break;

            case 8:
                ans=document.getElementById("3").innerHTML + document.getElementById("5").innerHTML + document.getElementById("7").innerHTML;
                break;
         }
         console.log(ans)

         if(ans=="XXX"){
            console.log("X wins")
            document.getElementById("iframe").src="user1.html"
            let arr=document.getElementsByClassName("box")
            for(let i=0;i<arr.length;i++){
                arr[i].removeAttribute('onclick')
            }
            break;
         }
         else if(ans=="OOO"){
            console.log("O wins")
             document.getElementById("iframe").src="user2.html"
             let arr=document.getElementsByClassName("box")
            for(let i=0;i<arr.length;i++){
                arr[i].removeAttribute('onclick')
            }
            break;
         }
         else{
            console.log("Draw!")
         }
    }
}

