class FormVista{
    constructor(){
        this.boton = document.getElementById("enviar-nota");
        this.inputNotaExamen = document.getElementById("nota-examen");
        this.inputNotaPractica = document.getElementById("nota-practica");
        this.inputNotaAsistencia = document.getElementById("nota-asistencia");
        this.resultadoModal = document.querySelector(".resultado");
        this.mensajeModal = document.querySelector(".mensaje");
        this.modal = document.querySelector(".modal-background");
    }
    onPressingButton(callbacks){
        this.boton.addEventListener("click",()=>{
            /*
            let resultado,mensaje;
            try{
                resultado = parseInt(this.inputGrade.value);
                if (isNaN(resultado)){
                    throw new Error("Gracioso");
                }
                callbacks.setNota(resultado);
                mensaje=callbacks.definirMensaje();
            }
            catch(e){
                resultado = "¿Sos chistoso?";
                mensaje="He descubierto que intentaste hackear el sitio";
            }*/
            let notaExamen = parseInt(this.inputNotaExamen.value);
            let notaPractica = parseInt(this.inputNotaPractica.value);
            let notaAsistencia = parseInt(this.inputNotaAsistencia.value);
            callbacks.setNotaExamen(notaExamen);
            callbacks.setNotaPractica(notaPractica);
            callbacks.setNotaAsistencia(notaAsistencia);
            let resultado = callbacks.verificarAprobacion();
            let mensaje = callbacks.definirMensaje();           
            this.abrirModal(resultado,mensaje);
        });
    }
    abrirModal(res,msg){
        this.resultadoModal.innerHTML=res;
        this.mensajeModal.innerHTML=msg;
        this.modal.style.display = "flex";
        this.modal.style.animation = "aparecer 1s forwards";
    }
}