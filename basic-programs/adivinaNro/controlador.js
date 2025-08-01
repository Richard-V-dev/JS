const modelo = new Juego();
const vista = new JuegoVista();
const controlador = {
    getEndedGame: ()=>modelo.getEndedGame(),
    getNumber: ()=>modelo.getNumber(),
    getIntentos:()=> modelo.getIntentos(),
    getGuessNumber: ()=>modelo.getGuessNumber(),
    getAttemptList: ()=>modelo.getAttemptList(),
    setIntentos:(attempts)=> modelo.setIntentos(attempts),
    setGuessNumber: (guessNumber)=>modelo.setGuessNumber(guessNumber),
    appendAttempt: (attempt)=>modelo.appendAttempt(attempt),
    verifyGuessNumber: (guessNumber)=>modelo.verifyGuessNumber(guessNumber),
};

vista.onPressingSubmit(modelo.getAttemptList(),controlador);
vista.onPressingReset(controlador);