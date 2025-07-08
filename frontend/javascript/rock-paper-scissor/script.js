const result=document.getElementById("result")
function gameLogic(ref){
    const computer="";
    const user=ref.id;
    let randomNumber=Math.random().toFixed(1)
    console.log(randomNumber)
    if(randomNumber<=0.1 && randomNumber<0.4){
        computer="rock";
    }
    else if(randomNumber<=0.4 && randomNumber<0.7){
        computer="paper"
    }
    else{
        computer="scissor"
    }
    

    if(user==computer){
        result.innerHTML=" ITS A DRAW !"
    }
    else if(user=="rock")
    {
        
    }
}