class CalculadoraVista{
    constructor(){
        this.screen = document.getElementById("pantalla");
        
        this.buttonC = document.getElementById("C");
        this.buttonBorrar = document.getElementById("borrar");
        this.buttonDividir = document.getElementById("dividir");

        this.button7 = document.getElementById("7");
        this.button8 = document.getElementById("8");
        this.button9 = document.getElementById("9");
        this.buttonMultiplicar= document.getElementById("multiplicar");

        this.button4 = document.getElementById("4");
        this.button5 = document.getElementById("5");
        this.button6 = document.getElementById("6");
        this.buttonRestar = document.getElementById("restar");

        this.button1 = document.getElementById("1");
        this.button2 = document.getElementById("2");
        this.button3 = document.getElementById("3");
        this.buttonSumar = document.getElementById("sumar");

        this.buttonSigno = document.getElementById("signo");
        this.buttonCero = document.getElementById("0");
        this.buttonDecimal = document.getElementById("decimal");
        this.buttonIgual = document.getElementById("igual");

    }
    typeNumber(nro,callbacks){
        if(this.screen.value.length<15){
                if(callbacks.getOp()==""){
                    //console.log(callbacks.getOp());
                    this.screen.value += nro;
                    callbacks.setAns(parseFloat(this.screen.value));
                    console.log(callbacks.getAns());
                }
                else if (callbacks.getIgual() === true) {
                    this.screen.value = nro;
                    callbacks.setAns(parseFloat(this.screen.value));
                    callbacks.setNro2(0);
                    callbacks.setOp("");
                    callbacks.setIgual(false);
                }
                else if (Math.abs(parseFloat(this.screen.value) - callbacks.getAns()) < 1e-10) {
                    this.screen.value = nro;
                    callbacks.setNro2(parseFloat(this.screen.value));
                    console.log(callbacks.getNro2());
                }
                else{
                    this.screen.value += nro;
                    callbacks.setNro2(parseFloat(this.screen.value));
                    console.log(callbacks.getNro2());
                }
            }
    }
    onPressing0(callbacks){
        this.buttonCero.addEventListener("click",()=>{
            if(this.screen.value!="0"){//&&this.screen.value!=
                this.typeNumber("0",callbacks);
            }
        });
    }
    onPressing1(callbacks){
        this.button1.addEventListener("click",()=>{
            this.typeNumber("1",callbacks);
        });
    }
    onPressing2(callbacks){
        this.button2.addEventListener("click",()=>{
            this.typeNumber("2",callbacks);
        });
    }
    onPressing3(callbacks){
        this.button3.addEventListener("click",()=>{
            this.typeNumber("3",callbacks);
        });
    }
    onPressing4(callbacks){
        this.button4.addEventListener("click",()=>{
            this.typeNumber("4",callbacks);
        });
    }
    onPressing5(callbacks){
        this.button5.addEventListener("click",()=>{
            this.typeNumber("5",callbacks);
        });
    }
    onPressing6(callbacks){
        this.button6.addEventListener("click",()=>{
            this.typeNumber("6",callbacks);
        });
    }
    onPressing7(callbacks){
        this.button7.addEventListener("click",()=>{
            this.typeNumber("7",callbacks);
        });
    }
    onPressing8(callbacks){
        this.button8.addEventListener("click",()=>{
            this.typeNumber("8",callbacks);
        });
    }
    onPressing9(callbacks){
        this.button9.addEventListener("click",()=>{
            this.typeNumber("9",callbacks);            
        });
    }
    onPressingC(callbacks){
        this.buttonC.addEventListener("click",()=>{
            this.screen.value="";
            callbacks.setAns(0);
            callbacks.setNro2(0);
            callbacks.setOp("");
            callbacks.setIgual(false);
        });
    }
    onPressingDecimal(callbacks){
        this.buttonDecimal.addEventListener("click",()=>{
            //console.log(this.screen.value);
            if(this.screen.value===""){
                this.screen.value = "0.";
            }
            else if(this.screen.value.indexOf(".")==-1){
                this.screen.value += ".";
            
            }
        });
    }
    onPresingSumar(callbacks){
        this.buttonSumar.addEventListener("click",()=>{
            callbacks.setOp("+");
            callbacks.setIgual(false);
            //console.log("nro1: "+callbacks.getAns()+", op:"+callbacks.getOp());
        });
    }
    onPresingRestar(callbacks){
        this.buttonRestar.addEventListener("click",()=>{
            callbacks.setOp("-");
            callbacks.setIgual(false);
        });
    }
    onPresingDividir(callbacks){
        this.buttonDividir.addEventListener("click",()=>{
            callbacks.setOp("/");
            callbacks.setIgual(false);
        });
    }
    onPresingMultiplicar(callbacks){
        this.buttonMultiplicar.addEventListener("click",()=>{
            callbacks.setOp("x");
            callbacks.setIgual(false);
        });
    }
    actualizarEntrada(callbacks){
        if(callbacks.getOp()==""){
            callbacks.setAns(parseFloat(this.screen.value));
        }
        else if(callbacks.getNro2()==""){
            callbacks.setNro2(parseFloat(this.screen.value));
        }
        else {
            callbacks.setNro2(parseFloat(this.screen.value));
        }
    }
    onPressingBorrar(callbacks){
        this.buttonBorrar.addEventListener("click",()=>{
            if(callbacks.getIgual()!=true){
                this.screen.value = this.screen.value.slice(0,this.screen.value.length-1);
                this.actualizarEntrada(callbacks);
            }
        });
    }
    onPressingSigno(callbacks){
        this.buttonSigno.addEventListener("click",()=>{
        if (parseFloat(this.screen.value)>0){
            this.screen.value = "-"+this.screen.value;
        } else if(parseFloat(this.screen.value)<0){
            this.screen.value = this.screen.value.slice(1,this.screen.value.length);
        }
        this.actualizarEntrada(callbacks);
        });
    }
    formatearNro(nro){
        if(Math.abs(nro)>1e10||(Math.abs(nro)<1e-6&&nro!==0)){
            return nro.toExponential(6);
        }
        else{
            let texto = nro.toString();
            if(texto.includes(".")){
                return parseFloat(nro.toFixed(6));
            }
            else{
                return texto.length>15?nro.toExponential(6):nro;
            }
        }
    }
    onPressingIgual(callbacks){
        this.buttonIgual.addEventListener("click",()=>{
            console.log("nro1:"+callbacks.getAns()+", nro2:"+callbacks.getNro2()+ ", op="+callbacks.getOp());
            let resultado = callbacks.calcular(); 
            this.screen.value = this.formatearNro(resultado);
            callbacks.setIgual(true);
        });
    }
}