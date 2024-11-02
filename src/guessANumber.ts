const ps = require('prompt-sync');
const input = ps();

let keepPlaying: boolean = true;

function startGame(remainingLives: number) {
    const targetNumber: number = Math.floor(Math.random() * 100) + 1;
    let attempts: number[] = [];
    let win: boolean = false;

    while (remainingLives > 0 && !win) {
        const guess = getGuess();
        if (isNaN(guess)) {
            console.log("Por favor, ingresa un número válido.");
            continue;
        }

        attempts.push(guess);

        if (guess < targetNumber) {
            remainingLives--;
            console.log(`La suposición es demasiado baja. Vidas restantes: ${remainingLives}`);
        } else if (guess > targetNumber) {
            remainingLives--;
            console.log(`La suposición es demasiado alta. Vidas restantes: ${remainingLives}`);
        } else {
            win = true;
            console.log('¡Felicitaciones! Has ganado el juego');
            console.log('Sus suposiciones han sido: ', attempts);
        }
    }

    if (!win) {
        console.log(`Has perdido. El número era: ${targetNumber}`);
    }
}

function getGuess(): number {
    const inputGuess = input('Adivina el número: ');
    return Number(inputGuess);
}

function chooseDifficulty(): number {
    console.log('1 - Fácil (15 vidas)');
    console.log('2 - Intermedio (10 vidas)');
    console.log('3 - Difícil (5 vidas)');
    console.log('4 - Experto (1 vida)');
    console.log('0 - Salir');
    return Number(input('Seleccione su dificultad: '));
}

console.log('¡Bienvenido al juego Adivina el Número!\n');

while (keepPlaying) {
    const difficulty = chooseDifficulty();

    switch (difficulty) {
        case 0:
            keepPlaying = false;
            break;
        case 1:
            startGame(15);
            break;
        case 2:
            startGame(10);
            break;
        case 3:
            startGame(5);
            break;
        case 4:
            startGame(1);
            break;
        default:
            console.log('Debe ingresar una opción válida');
    }
}