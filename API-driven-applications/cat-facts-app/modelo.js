class CatPhraseModel{
    constructor(){

    }
    async getPhrase(){
        const url = "https://catfact.ninja/fact";
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Error al obtener la frase del gato");
        }
        return await response.json();
    }
}