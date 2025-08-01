class PokeModelo{
    constructor(){

    }
    async obtenerPokemon(nombreOId){
        const url = `https://pokeapi.co/api/v2/pokemon/${nombreOId.toLowerCase()}`;
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Pokémon no encontrado");
        }
        return await response.json();
    }
}