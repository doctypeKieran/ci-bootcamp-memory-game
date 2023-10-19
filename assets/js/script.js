// Create array to hold colors
let colors = ["red", "red", "green", "green", "blue", "blue", "yellow", "yellow", "orange", "orange", "purple", "purple"];

// Create a function to shuffle arrays
function shuffleArray(arr) {
    let currentIndex = arr.length;
    let randomIndex;

    while(currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}

// And shuffle the colors array:
shuffleArray(colors);

// Variable for the gameboard
const gameBoard = document.getElementById('gameBoard');

for (let color of colors) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = color;
    // ADD HANDLECLICK HERE
    gameBoard.appendChild(card);
}