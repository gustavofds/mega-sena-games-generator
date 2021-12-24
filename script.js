const NUMBER_OF_GAMES = 10;
const QUANTITY_OF_NUMBERS_PER_GAME = 6;

function generateRandomNumer (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const generateMegaSenaNumber = () => generateRandomNumer(1, 60);

const generateMegaSenaGame = () => {
    const myGame = new Set();
    while (myGame.size < QUANTITY_OF_NUMBERS_PER_GAME) {
        const newNumber = generateMegaSenaNumber();
        
        myGame.add(newNumber);
    }

    return [...myGame].join(', ');
}

for (let i = 1; i <= NUMBER_OF_GAMES; i++) {
    console.log(`Jogo ${i}: ${generateMegaSenaGame()}`)
}
