const modelo = new Calculadora();
const vista = new CalculadoraVista();

const controlador = {
    getOp: ()=> modelo.getOp(),
    getAns: ()=>modelo.getAns(),
    getNro2: ()=>modelo.getNro2(),
    getIgual: ()=>modelo.getIgual(),

    setOp: (op)=>modelo.setOp(op),
    setAns: (ans)=>modelo.setAns(ans),
    setNro2: (nro2)=>modelo.setNro2(nro2),
    setIgual: (igual)=>modelo.setIgual(igual),
/*
    sumar: () => modelo.sumar(),
    restar: () => modelo.restar(),
    dividir: () => modelo.dividir(),
    multiplicar: () => modelo.multiplicar()*/
    calcular: ()=> modelo.calcular()
};

vista.onPressing0(controlador);
vista.onPressing1(controlador);
vista.onPressing2(controlador);
vista.onPressing3(controlador);
vista.onPressing4(controlador);
vista.onPressing5(controlador);
vista.onPressing6(controlador);
vista.onPressing7(controlador);
vista.onPressing8(controlador);
vista.onPressing9(controlador);

vista.onPresingSumar(controlador);
vista.onPresingRestar(controlador);
vista.onPresingDividir(controlador);
vista.onPresingMultiplicar(controlador);

vista.onPressingC(controlador);
vista.onPressingBorrar(controlador);
vista.onPressingSigno(controlador);
vista.onPressingDecimal(controlador);

vista.onPressingIgual(controlador);