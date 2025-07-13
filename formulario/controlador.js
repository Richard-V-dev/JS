const modelo = new FormularioUsuario();
const vista = new FormularioVista();

const controlador = {
    setNombre: (nombre)=>modelo.setNombre(nombre),
    setCorreo: (correo)=>modelo.setCorreo(correo),
    setMensaje: (mensaje)=>modelo.setMensaje(mensaje),
    getNombre: ()=>modelo.getNombre(),
    getCorreo: ()=>modelo.getCorreo(),
    getMensaje: ()=>modelo.getMensaje(),
    validarCamposNoVacios:()=>modelo.validarCamposNoVacios(),
    toString: ()=>modelo.toString()
}
vista.onTyping();
vista.onPressingSubmit(controlador);