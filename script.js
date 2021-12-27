function generateRandomNumer (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const generateMegaSenaNumber = () => generateRandomNumer(1, 60);
 
const generateMegaSenaGame = (numbersQtyPerGame) => {
    const myGame = new Set();
    while (myGame.size < numbersQtyPerGame) {
        const newNumber = generateMegaSenaNumber();
        
        myGame.add(newNumber);
    }

    return [...myGame].join(', ');
}

module.exports = generateMegaSenaGame;

