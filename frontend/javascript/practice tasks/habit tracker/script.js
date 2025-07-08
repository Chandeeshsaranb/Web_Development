let lday=0
let streak=0
let count=0
let mstr=0
if (!localStorage.getItem('days')) {
    localStorage.setItem('days', lday);
}

if (!localStorage.getItem('streak')) {
    localStorage.setItem('streak', streak);
}

if (!localStorage.getItem('mstreak')) {
    localStorage.setItem('mstreak', mstr);
}
document.getElementById("dayCount").innerHTML=JSON.parse(localStorage.getItem('days'))
document.getElementById("streakCount").innerHTML=JSON.parse(localStorage.getItem('streak'))
document.getElementById("maxStreakCount").innerHTML=JSON.parse(localStorage.getItem('mstreak'))

function updateCounts(){
    let day=JSON.parse(localStorage.getItem('days'))
     day++
    localStorage.setItem('days', day)
    if(day==0){
         document.getElementById("dayCount").innerHTML=day
    }
    document.getElementById("dayCount").innerHTML=day

    console.log(localStorage.getItem('days'))  

    if(count==5){
        let stre=JSON.parse(localStorage.getItem('streak'))
        stre++
        localStorage.setItem('streak', stre)


        let mstr=JSON.parse(localStorage.getItem('mstreak'))
        if(mstr<=stre){
            localStorage.setItem('mstreak', stre)
        }
        

    }
    else{

    //     let stre=JSON.parse(localStorage.getItem('streak'))
    //     if(stre>mstr){
    //         ocument.getElementById("maxStreakCount").innerHTML=stre
    //     }
        
        localStorage.setItem('streak',streak)
    }


    count=0
    window.location.reload()
}


// Only set to 0 if 'days' is not already in localStorage
// if (!localStorage.getItem('days')) {
//     localStorage.setItem('days', 0);
// }

// // Display current day count on load
// document.getElementById("dayCount").innerHTML = localStorage.getItem('days');

// function updateCounts() {
//     let day = parseInt(localStorage.getItem('days')); // Get current value and parse it as number
//     document.getElementById("dayCount").innerHTML = day;
//     day++; // Increment
//     localStorage.setItem('days', day); // Update localStorage
//     console.log(localStorage.getItem('days'));
// }







        // let lday = 0;

        // // Initialize only once if not already set
        // if (!localStorage.getItem('days')) {
        //     localStorage.setItem('days', lday);
        // }

        // // Display current count on page load
        // document.getElementById("dayCount").innerHTML = JSON.parse(localStorage.getItem('days'));

        // // Function to increment count
        // function updateCounts() {
        //     let day = JSON.parse(localStorage.getItem('days'));
        //     day++;
        //     localStorage.setItem('days', day);
        //     document.getElementById("dayCount").innerHTML = day;
        //     console.log("Days stored:", localStorage.getItem('days'));
        // }





function countStreak(){
    count++;
}


function editHabit1(){
    let habit=prompt("Enter the updated habit").toUpperCase()
    document.getElementById("hab1").innerHTML=habit
}
function editHabit2(){
    let habit=prompt("Enter the updated habit").toUpperCase()
    document.getElementById("hab2").innerHTML=habit
}
function editHabit3(){
    let habit=prompt("Enter the updated habit").toUpperCase()
    document.getElementById("hab3").innerHTML=habit
}
function editHabit4(){
    let habit=prompt("Enter the updated habit").toUpperCase()
    document.getElementById("hab4").innerHTML=habit
}
function editHabit5(){
    let habit=prompt("Enter the updated habit").toUpperCase()
    document.getElementById("hab5").innerHTML=habit
}
