class FormularioUsuario{
    constructor(){
        this.nombre = "";
        this.correo = "";
        this.mensaje = "";
    }
    getNombre(){
        return this.nombre;
    }
    getCorreo(){
        return this.correo;
    }
    getMensaje(){
        return this.mensaje;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    setCorreo(correo){
        this.correo = correo;
    }
    setMensaje(mensaje){
        this.mensaje = mensaje;
    }
    /*
    validarCorreo(){
        let arrobaIndex=this.correo.indexOf('@');
        if (arrobaIndex==-1){
            throw new Error("No hay caracter: @");
        }
        else if(this.correo.indexOf('.',arrobaIndex +1)==-1){
            throw new Error("No hay caracter: . después de @");
        }
    }*/
    validarCamposNoVacios(){
        //let msg = "Campo vacío"
        if(this.nombre.trim()==""){
            throw new NombreInvalidoError("El campo nombre está vacío");
        }
        if(this.correo.trim()==""){
            throw new CorreoInvalidoError("El campo correo está vacío");
        }
        if(this.mensaje.trim()==""){
            throw new MensajeInvalidoError("El campo mensaje está vacío");
        }
    }
    toString(){
        return `Nombre: ${this.nombre}<br>
                Correo: ${this.correo}<br>
                Mensaje: ${this.mensaje}<br>`
    }
}
class NombreInvalidoError extends Error {
    constructor(mensaje="") {
        super(mensaje);
        //this.name = "NombreInvalidoError";
    }
}
class CorreoInvalidoError extends Error {
    constructor(mensaje="") {
        super(mensaje);
        //this.name = "CorreoInvalidoError";
    }
}
class MensajeInvalidoError extends Error {
    constructor(mensaje="") {
        super(mensaje);
        //this.name = "MensajeInvalidoError";
    }
}