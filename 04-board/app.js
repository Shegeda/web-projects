const board = document.querySelector('#board')
const colors = ['#FFA500', '#FF6347', '#FF69B4', '#FFD700', '#00FA9A', '#7CFC00', '#20B2AA']
const SQUARES_NUMBER = 105

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = 'transparent';
    element.style.boxShadow = '0 0 2px';
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}