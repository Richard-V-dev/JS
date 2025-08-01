class FormularioVista{
    constructor(){
        this.form = document.getElementById("form");
        this.inputNombre = document.getElementById("nombre");
        this.inputCorreo = document.getElementById("correo");
        this.inputMensaje = document.getElementById("mensaje");
        //this.inputSubmit = document.getElementById("submit");
    }
    onTyping() {
        this.inputNombre.addEventListener("input", () => {
            this.inputNombre.setCustomValidity("");
        });
        this.inputCorreo.addEventListener("input",()=>{
            this.inputCorreo.setCustomValidity("");
        });
        this.inputMensaje.addEventListener("input",()=>{
            this.inputMensaje.setCustomValidity("");
        });
    }
    onPressingSubmit(callbacks){
        this.form.addEventListener("submit",(event)=>{
            event.preventDefault();

            callbacks.setNombre(this.inputNombre.value);
            callbacks.setCorreo(this.inputCorreo.value);
            callbacks.setMensaje(this.inputMensaje.value);
            try{
                callbacks.validarCamposNoVacios();
                localStorage.setItem("nombre",callbacks.getNombre());
                localStorage.setItem("correo",callbacks.getCorreo());
                localStorage.setItem("mensaje",callbacks.getMensaje());
                window.location.href="gracias.html";
                console.log(`<span>${callbacks.toString()}</span>`)
            }
            catch(error){
                if(error instanceof NombreInvalidoError){
                    console.error("Se capturó un error: ",error.message);
                    this.inputNombre.setCustomValidity("El nombre no puede estar vacío");
                    this.inputNombre.reportValidity();
                    //event.preventDefault();
                    //return;
                } else if(error instanceof CorreoInvalidoError){
                    console.error("Se capturó un error: ",error.message);
                    this.inputCorreo.setCustomValidity("El correo no puede estar vacío");
                    this.inputCorreo.reportValidity();
                } else if(error instanceof MensajeInvalidoError){
                    console.error("Se capturó un error: ",error.message);
                    this.inputMensaje.setCustomValidity("El mensaje no puede estar vacío");
                    this.inputMensaje.reportValidity();
                }
            }
            
        });
    }
}