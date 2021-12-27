const readline = require('readline');
const generateMegaSenaGame = require('./script.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('How many games would you like? ', (gamesQty) => {

    rl.question(
        'How many numbers per game would you like? ',
        (numbersQty) => {
            for (let i = 1; i <= +gamesQty; i++) {
                console.log(`Jogo ${i}: ${generateMegaSenaGame(+numbersQty)}`)
            };

            rl.close();
        },
    );
});


