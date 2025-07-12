



flag = 1
function toggleDisplay() {
    if (flag) {
        document.getElementById("body").style.backgroundColor = "Black"
        document.getElementById("body").style.color = "white"
        document.getElementById("textarea").style.backgroundColor = "black"
        document.getElementById("textarea").style.color = "white"
        document.getElementById("textarea").style.borderColor = "white"
        document.getElementById("quote").style.backgroundColor = "black"
        document.getElementById("quote").style.color = "white"
        document.getElementById("quote").style.borderBlockColor = "white"
        document.getElementById("quote").style.borderColor = "white"
        document.getElementById("displayMode").innerHTML= "Light Mode"

    }
    else {
        document.getElementById("body").style.backgroundColor = "white"
        document.getElementById("body").style.color = "black"
        document.getElementById("textarea").style.backgroundColor = "white"
        document.getElementById("textarea").style.color = "black"
        document.getElementById("textarea").style.borderColor = "black"
        document.getElementById("quote").style.backgroundColor = "white"
        document.getElementById("quote").style.color = "black"
        document.getElementById("quote").style.borderBlockColor = "black"
        document.getElementById("quote").style.borderColor = "black"
        document.getElementById("displayMode").innerHTML= "Dark Mode"

    }
    flag = !flag;
}

function start() {
    document.getElementById("textarea").focus()
    fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text")
        .then(res => res.text())
        .then(post => document.getElementById("quote").innerText = post)



    let time = 30
    let counter = document.getElementById("counter")

    let countertimer = setInterval(() => {

        time--;
        counter.textContent = time;


        if (time <= 0) {
            clearInterval(countertimer)
            counter.textContent = "0"
        }

        let word=document.getElementById("textarea").value
        console.log(word);

        let arr=word.split(" ")
        let wordcount=arr.length
        console.log(wordcount)

        //document.getElementById("totalWords").innerHTML=wordCount

        if(time<=0){
               document.getElementById("totalWords").innerHTML=wordcount * 2
        }

    }, 1000);
 

    


}