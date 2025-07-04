document.addEventListener('keydown', function(event) {
    let kp = event.key.toLowerCase();
    const keyMap = {
        'q': 'a1',
        'w': 'a2',
        'e': 'a3',
        'r': 'a4',
        't': 'a5',
        'y': 'a6',
        'u': 'a7',
        'i': 'a8',
        'o': 'a9',
        'p': 'a10',
        'a': 'a11',
        's': 'a12',
        'd': 'a13',
        'f': 'a14',
        'g': 'a15',
        'h': 'a16',
        'j': 'a17',
        'k': 'a18',
        'l': 'a19',
        ';': 'a20'
    };
    if (keyMap[kp]) {
        const audio = document.getElementById(keyMap[kp]);
        audio.parentElement.classList.add("active-press");
        audio.currentTime = 0;
        audio.play();
    }
       
})

document.addEventListener('keyup', function(event) {
    let ke = event.key.toLowerCase();
    const keyMap = {
        'q': 'a1',
        'w': 'a2',
        'e': 'a3',
        'r': 'a4',
        't': 'a5',
        'y': 'a6',
        'u': 'a7',
        'i': 'a8',
        'o': 'a9',
        'p': 'a10',
        'a': 'a11',
        's': 'a12',
        'd': 'a13',
        'f': 'a14',
        'g': 'a15',
        'h': 'a16',
        'j': 'a17',
        'k': 'a18',
        'l': 'a19',
        ';': 'a20'
    };
    if (keyMap[ke]) {
        const audio = document.getElementById(keyMap[ke]);
        audio.parentElement.classList.remove("active-press");
    }
});

