class VistaContador{
    constructor(){
        this.div = document.getElementById("valor");
        this.botonInc = document.getElementById("btnIncrementar");
        this.botonDec = document.getElementById("btnDecrementar");
        this.botonRes = document.getElementById("btnResetear");
    }
    actualizar(valor){
        this.div.textContent=valor;
    }
    alIncrementar(handler){
        this.botonInc.addEventListener('click',handler);
    }
    alDecrementar(handler){
        this.botonDec.addEventListener('click',handler);
    }
    alResetear(handler){
        this.botonRes.addEventListener('click',handler);
    }
}