class FormModelo{
    constructor(){
        this.notaExamen = 0;
        this.notaPractica = 0;
        this.notaAsistencia = 0;
    }
    setNotaExamen(notaExamen){
        this.notaExamen = notaExamen;
    }
    getNotaExamen(){
        return this.notaExamen;
    }
    setNotaPractica(notaPractica){
        this.notaPractica = notaPractica;
    }
    getNotaPractica(){
        return this.notaPractica;
    }
    setNotaAsistencia(notaAsistencia){
        this.notaAsistencia = notaAsistencia;
    }
    getNotaAsistencia(){
        return this.notaAsistencia;
    }
    verificarAprobacion(){
        if(this.getProm()>=7){
            return `<span style='color:green'>Aprobado</span>`;
        }
        else{
            return `<span style='color:red'>Desaprobado</span>`;
        }
    }
    getProm(){
        return Math.round((this.notaExamen+this.notaPractica+this.notaAsistencia)/3);
    }
    definirMensaje(){
        let resultado="Comentario a la nota promedio igual a "+this.getProm() +": ";
        switch (this.getProm()){
            case 1:resultado += "Muy mal, no puede irte tan mal";
            break;
            case 2:resultado += "Eres muy malo para esta materia";
            break;
            case 3:resultado += "No sabes casi nada";
            break;
            case 4:resultado += "Muy mal";
            break;
            case 5: resultado += "Mal";
            break;
            case 6: resultado += "Regular";
            break;
            case 7: resultado += "Bien pero puedes mejorar";
            break;
            case 8: resultado += "Muy bien";
            break;
            case 9: resultado += "¡Excelente!";
            break;
            case 10: resultado += "Perfecto sigue así : )";
            break;
            default: resultado = null;
        }
        return resultado;
    }
}