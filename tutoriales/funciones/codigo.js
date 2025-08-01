/*function saludar(){
    let respuesta = prompt("Hola amigo, cómo estuvo tu día?: ");
    if (respuesta=="bien"){
        alert("me alegro");
    }
    else{
        alert("una pena");
    }
}
*/
saludar = function(){
    let respuesta = prompt("Hola amigo, cómo estuvo tu día?: ");
    if (respuesta=="bien"){
        alert("me alegro");
    }
    else{
        alert("una pena");
    }
}
function sumar(num1,num2){
    let res = num1+num2;
    document.writeln(res+'<br>');
}
const saludar2 = (nombre)=>{
    document.writeln("hola cómo estás? "+nombre);
}
let num1 = 10;
saludar2("Rancio");
//alert(num1);
sumar(12,32);
//alert(num1);