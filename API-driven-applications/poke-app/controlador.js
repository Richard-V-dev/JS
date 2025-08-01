class PokeControlador{
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;

        vista.onBuscarClick(this.buscarPokemon.bind(this));
    }
    async buscarPokemon(nombreOId){
        this.vista.mostrarCargando();
        try{
            const datos = await this.modelo.obtenerPokemon(nombreOId);
            this.vista.mostrarPokemon(datos);
        }
        catch(error){
            this.vista.mostrarError(error.message);
        }
    }
}