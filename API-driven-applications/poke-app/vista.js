class PokeVista{
    constructor(){
        this.input = document.getElementById("pokeInput");
        this.boton = document.getElementById("buscarBtn");
        this.resultado = document.getElementById("resultado");
    }
    onBuscarClick(callback){
        this.boton.addEventListener("click",()=>{
            const nombreOId = this.input.value.trim();
            if (nombreOId) {
                callback(nombreOId);
            }
        });
    }
    mostrarPokemon(data){
        this.resultado.innerHTML=`<h2>${data.name.toUpperCase()}</h2>
                                <img src="${data.sprites.front_default}" alt="${data.name}">
                                <p><strong>Altura:</strong>${data.height}</p>
                                <p><strong>Peso:</strong>${data.weight}</p>`;
    }
    mostrarError(msg){
        this.resultado.innerHTML=`<p style="color: red">${msg}</p>`;
    }
    mostrarCargando(){
        this.resultado.innerHTML="Cargando...";
    }
}