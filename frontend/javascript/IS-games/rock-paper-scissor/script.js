const result = document.getElementById("result");
let cc = document.getElementById("computerChoice");
let uc = document.getElementById("userChoice");
function gameLogic(ref) {
    let computer = "";
    let user = ref.id;
    let randomNumber = Math.random().toFixed(1)
    console.log(randomNumber)
    if (randomNumber <= 0.1 && randomNumber < 0.4) {
        computer = "rock";
        cc.innerHTML = "&#9994"
    }
    else if (randomNumber <= 0.4 && randomNumber < 0.7) {
        computer = "paper"
        cc.innerHTML = "&#129306"
    }
    else {
        computer = "scissor"
        cc.innerHTML = "&#9996"
    }

  if (user == "rock") {
        uc.innerHTML = "&#9994"
    }
    else if (user == "paper") {
        uc.innerHTML = "&#129306"
    }
    else {
        uc.innerHTML = "&#9996"
    }




    if (user == computer) {

        result.innerHTML = " ITS A DRAW !"
    }
    else if (user == "rock" && computer == "paper" || user == "paper" && computer == "scissor" || user == "scissor" && computer == "rock") {
        result.innerHTML = " Computer WON !"
    }
    else {
        result.innerHTML = " You WON !"
    }

}