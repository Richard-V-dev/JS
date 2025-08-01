class FormularioVista{
    constructor(){
        this.fullName = document.getElementById("fullName");
        this.email = document.getElementById("email");
        this.subject = document.getElementById("subject");
        this.form = document.getElementById("form");
        this.button = document.getElementById("btnSubmit");
        this.resultado = document.getElementById("resultado");
    }
    onPressingSubmit(callbacks){
        this.form.addEventListener("submit",(e)=>{
            e.preventDefault();
            callbacks.setName(this.fullName.value);
            callbacks.setEmail(this.email.value);
            callbacks.setSubject(this.subject.value);
            try{
                callbacks.validarCampos();
                //console.log("Se validaron los campos exitosamente");
                this.resultado.innerHTML="Solicitud enviada correctamente";
                this.resultado.classList.remove(...this.resultado.classList);
                this.resultado.classList.add("green");
            }
            catch(error){
                if(error instanceof NombreInvalidoError){
                    //console.error("Se detectó un error: ", error.message);
                    this.resultado.innerHTML="Campo nombre inválido: "+ error.message;
                    this.resultado.classList.remove(...this.resultado.classList);
                    this.resultado.classList.add("red");
                }
                else if(error instanceof EmailInvalidoError){
                    this.resultado.innerHTML="Campo email inválido: "+ error.message;
                    this.resultado.classList.remove(...this.resultado.classList);
                    this.resultado.classList.add("red");
                }
                else if(error instanceof MateriaInvalidaError){
                    this.resultado.innerHTML="Campo materia inválida: "+ error.message;
                    this.resultado.classList.remove(...this.resultado.classList);
                    this.resultado.classList.add("red");
                }
            }
        });
    }
} 