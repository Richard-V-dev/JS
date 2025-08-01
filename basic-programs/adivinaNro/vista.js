class JuegoVista{
    constructor(){
        this.form = document.getElementById("form");
        this.input = document.getElementById("guessInput");
        this.message = document.getElementById("message");
        this.attempts = document.getElementById("attempts");
        this.resetBtn = document.getElementById("resetBtn");
        this.attemptsList = document.getElementById("attempts-list");
    }
    onPressingSubmit(attemptList,callbacks){
        this.form.addEventListener("submit",(event)=>{
            event.preventDefault();
            console.log(callbacks.getNumber());
            let guessNumber = parseInt(this.input.value);
            callbacks.appendAttempt(guessNumber);
            let attempts = callbacks.getIntentos();
            if(!callbacks.getEndedGame()){
                try{
                    this.manageHistory(attemptList);
                    this.message.innerHTML = callbacks.verifyGuessNumber(guessNumber);           
                }
                catch(error){
                    this.message.innerHTML = error.message+` el nro correcto era: ${callbacks.getNumber()}`;       
                }
            }              
        }); 
    }
    manageHistory(attemptList){
        this.attemptsList.innerHTML="";
        this.attempts.style.display = "block";
        attemptList.forEach((attempt,index) => {
            const li = document.createElement("li");
            const texto = document.createElement("span");
            texto.textContent=`Intento ${index+1}: ${attempt}`;
            li.append(texto);
            this.attemptsList.appendChild(li);
        });
    }
    onPressingReset(callbacks){
        this.resetBtn.addEventListener("click",()=>{
            location.reload(true);
        });
    }
}