const box = document.getElementById("boxes")
let totalSquare = 280;
for (let i = 0; i < totalSquare; i++) {
    let smallBoxes = document.createElement('div')
    smallBoxes.classList.add('square')
    smallBoxes.addEventListener('mouseover', () => { setColor(smallBoxes) })
    smallBoxes.addEventListener('mouseout', () => { removeColor(smallBoxes) })
    box.appendChild(smallBoxes)
}
function setColor(obj) {
    let color1 = randomColor()
    obj.style.backgroundColor = color1
}
function removeColor(obj) {
    obj.style.backgroundColor = "rgb(67, 73, 66)"
}
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}
