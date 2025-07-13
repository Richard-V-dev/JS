class Calculadora{
    constructor(nro1=0,nro2=0,op="",igual=false){
        this.ans = nro1;
        this.nro2 = nro2;
        this.op = op;
        this.igual = igual;
    }
    calcular() {
        this.igual=true;
        switch (this.op) {
            case "+": return this.sumar();
            case "-": return this.restar();
            case "x": return this.multiplicar();
            case "/": return this.dividir();
            default: return this.ans;
        }
    }
    sumar(){
        //this.op ="+";
        this.ans = this.ans+this.nro2;
        return this.ans;
    }
    restar(){
        //this.op ="-";
        this.ans = this.ans-this.nro2;
        return this.ans;
    }
    dividir(){
        //this.op ="/";
        //this.ans = parseFloat((this.ans/this.nro2).toFixed(2))
        this.ans = this.ans/this.nro2;
        return this.ans;
    }
    multiplicar(){
        //this.op ="x";
        this.ans = this.ans*this.nro2;
        return this.ans;
    }
    getAns(){
        return this.ans;
    }
    getNro2(){
        return this.nro2;
    }
    getOp(){
        return this.op;
    }
    setAns(ans){
        this.ans = ans;
    }
    setNro2(nro2){
        this.nro2=nro2;
    }
    setOp(op){
        this.op = op;
    }
    setIgual(igual){
        this.igual = igual;
    }
    getIgual(){
        return this.igual;
    }
}