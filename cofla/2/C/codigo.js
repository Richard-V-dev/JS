class calculadora{
    constructor(n1,n2=0){
        this.n1=n1;
        this.n2=n2;
    }
    suma(){
        return this.n1+this.n2;
    }
    resta(){
        return this.n1-this.n2;
    }
    multiplicacion(){
        return this.n1*this.n2;
    }
    division(){
        return this.n1/this.n2;
    }
    potencia(){
        return Math.pow(this.n1,this.n2);
    }
    raizCuadrada(){
        return Math.sqrt(this.n1);
    }
    raizCubica(){
        return parseFloat(Math.pow(this.n1,1/3).toFixed(2));
    }
}
alert("Soy una calculadora");
let op = parseInt(prompt("1.- suma\n2.- resta\n3.- multiplicación\n4.- división\n5.- potencia\n6.- raíz cuadrada\n7.- raíz cúbica"));
let n1= parseFloat(prompt("primer nro?"));
let calc = null;
if (op==1 || op==2 || op==3||op==4||op==5) {
    let n2 = parseFloat(prompt("segundo nro?"));
    calc = new calculadora(n1,n2);
}else{
    calc = new calculadora(n1);
}
let res;
switch (op){
    case 1: res = calc.suma();
    break;
    case 2: res = calc.resta();
    break;
    case 3: res = calc.multiplicacion();
    break;
    case 4: res= calc.division();
    break;
    case 5: res = calc.potencia();
    break;
    case 6: res = calc.raizCuadrada();
    break;
    case 7: res = calc.raizCubica();
    break;
}
alert(res);
