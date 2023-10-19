document.addEventListener("DOMContentLoaded", () => {
    // Create array to hold colors
    let colors = ["red", "red", "green", "green", "blue", "blue", "yellow", "yellow", "orange", "orange", "purple", "purple"];

    // Array to hold cards which are flipped by the user
    let flippedCards = [];

    /* 
        Amount of flipped cards initialised to 0, once it reaches colors.length / 2 then the game is over!
    */
    let matchedPairs = 0;

    // Create a function to shuffle arrays
    function shuffleArray(arr) {
        let currentIndex = arr.length;
        let randomIndex;

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }
        return arr;
    }

    // And shuffle the colors array:
    shuffleArray(colors);

    // Constant for correct matches display
    const correctMatches = document.getElementById('correct-matches');

    // Text content of correctMatches initialised to 0
    correctMatches.textContent = `Total matches: ${matchedPairs}`;

    // Variable for the gameboard
    const gameBoard = document.getElementById('gameBoard');

    for (let color of colors) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.addEventListener("click", handleCardClick);
        gameBoard.appendChild(card);
    }

    function handleCardClick(event) {
        const clickedCard = event.target;
        // Ignore click if the card has already been flipped or matched
        if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) {
            return;
        }

        // Show the card
        const cardColor = clickedCard.dataset.color;
        clickedCard.style.backgroundColor = cardColor;
        clickedCard.classList.add("flipped");

        // Add card to the flippedCards array
        flippedCards.push(clickedCard);

        // Check for a match
        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards;
            if (firstCard.dataset.color === secondCard.dataset.color) {
                // We actually found a match!
                firstCard.classList.add("matched");
                secondCard.classList.add("matched");
                matchedPairs++;
                // Update text content for correctMatches
                correctMatches.textContent = `Total matches: ${matchedPairs}`;

                // Reset flippedCards array
                flippedCards = [];

                // Check for game completion
                if (matchedPairs === colors.length / 2) {
                    alert("YOU WON!!! :D");
                }
            } else {
                // The cards don't match, flip them back over
                setTimeout(() => {
                    firstCard.style.backgroundColor = "";
                    firstCard.classList.remove("flipped");
                    secondCard.style.backgroundColor = "";
                    secondCard.classList.remove("flipped");
                    flippedCards = [];
                }, 500);
                return;
            }
        }
    }
});