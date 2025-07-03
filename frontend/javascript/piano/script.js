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
        'p': 'a10'
    };
    if (keyMap[kp]) {
        const audio = document.getElementById(keyMap[kp]);
        audio.currentTime = 0;
        audio.play();
        audio.parentElement.style.backgroundColor="grey"
    }
});

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
        'p': 'a10'
    };
    if (keyMap[ke]) {
        const audio = document.getElementById(keyMap[ke]);
        audio.parentElement.style.backgroundColor="white"
    }
});

