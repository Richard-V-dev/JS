const modelo = new FormModelo();
const vista = new FormVista();
const controlador = {
    getNotaExamen: ()=>modelo.getNotaExamen(),
    setNotaExamen: (notaExamen)=>modelo.setNotaExamen(notaExamen),
    getNotaPractica: ()=>modelo.getNotaPractica(),
    setNotaPractica: (notaPractica)=>modelo.setNotaPractica(notaPractica),
    getNotaAsistencia: ()=>modelo.getNotaAsistencia(),
    setNotaAsistencia: (notaAsistencia)=>modelo.setNotaAsistencia(notaAsistencia),
    definirMensaje: ()=>modelo.definirMensaje(),
    verificarAprobacion: ()=>modelo.verificarAprobacion(),
};
vista.onPressingButton(controlador);