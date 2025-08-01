class CatPhraseView{
    constructor(){
        this.button = document.getElementById("btn");
        this.result = document.getElementById("resultado");
    }
    async onPressingButton(callbacks){
        this.button.addEventListener("click",async()=>{
            this.result.textContent="Cargando...";
            try{
                const data = await callbacks.getPhrase();
                this.result.textContent = `🐱 ${data.fact}`;
            }
            catch(error){
                this.result.textContent=`⚠️ ${error.message}`;
            }
        });
    }
}