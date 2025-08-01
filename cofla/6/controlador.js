const modelo = new Contador();
const vista = new VistaContador();
function manejarIncremento(){
    modelo.incrementar();
    vista.actualizar(modelo.getValor());
}
function manejarDecremento(){
    modelo.decrementar();
    vista.actualizar(modelo.getValor());
}
function manejarReseteo(){
    modelo.resetear();
    vista.actualizar(modelo.getValor());
}
vista.alIncrementar(manejarIncremento);
vista.alDecrementar(manejarDecremento);
vista.alResetear(manejarReseteo);