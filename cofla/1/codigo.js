/*const constante_1=3.141516;
let nro1,nro2,nro3;
nro1=1;
nro2=2;
nro3=3;
alert(constante_1);
alert(nro1);
alert(nro2);
alert(nro3);
let nro4=null;
let nombre = prompt("decime tu nombre");
alert(nombre);
document.write("Richard");*/
let res= "Puedes comprar: ";
let dinero = prompt("Cuanto dinero dispones?");
if (dinero>=2.9){
    res += "Pote de 1/4 KG o Potecito de helado con confites = $2.9, tu vuelto sería= "+(dinero-2.9);
}
else if(dinero>=1.8){
    res += "Bombón helado marca helardo = $1.8, tu vuelto sería= "+(dinero-1.8);
}
else if(dinero>=1.7){
    res += "Bombón helado marca heladovich = $1.7, tu vuelto sería= "+(dinero-1.7);
}
else if(dinero>=1.6){
    res += "Bombón helado marca heladix = $1.6, tu vuelto sería= "+(dinero-1.6);
}
else if(dinero>=1){
    res += "Palito de helado de crema = $1, tu vuelto sería= "+(dinero-1);
}
else if(dinero>=0.6){
    res += "Palito de helado de agua = $0.6, tu vuelto sería= "+(dinero-0.6);
}
else{
    res = "No te alcanza dinero para nada, lo siento..."
}
alert(res);