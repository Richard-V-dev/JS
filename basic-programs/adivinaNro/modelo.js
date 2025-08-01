class Juego{
    constructor(){
        this.number=parseInt((Math).random().toFixed(2)*100);
        this.intentos=0;
        this.guessNumber=0;
        this.attemptList=[];
        this.endedGame = false;
    }
    getEndedGame(){
        return this.endedGame;
    }
    setEndedGame(bb){
        this.endedGame=bb;
    }
    getNumber(){
        return this.number;
    }
    getIntentos(){
        return this.intentos;
    }
    getGuessNumber(){
        return this.guessNumber;
    }
    setIntentos(intentos){
        this.intentos = intentos;
    }
    setGuessNumber(guessNumber){
        this.getGuessNumber = guessNumber;
    }
    getAttemptList(){
        return this.attemptList;
    }
    appendAttempt(attempt){
        this.attemptList.push(attempt);
    }
    

    verifyGuessNumber(guessNumber){
        this.intentos++;
        if(this.intentos<7){
            if(guessNumber===this.number){
                this.endedGame = true;
                return "Número supuesto correcto, ganaste!!!";
            }else if(guessNumber>this.number){
                return "Número supuesto incorrecto, el número correcto es menor"
            }else if (guessNumber<this.number){
                return "Número supuesto incorreco, el número correcto es mayor"
            }
        }
        else{
            this.endedGame = true;
            throw new PerdisteError("Perdiste: Exediste el número de intentos");
        }
    }
}
class PerdisteError extends Error{
    constructor(mensaje=""){
        super(mensaje);
    }
}