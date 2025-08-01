function validarCliente(hora){
    let edad = parseInt(prompt("Qué edad tienes?"));
    if (edad>=18){
        alert("Puedes pasar!");
        res = "son las "+hora+" horas. ";
        if(hora>=2 && hora<=6){
            res = res+"Puedes pasar gratis porque estás entre las 2 y las 6 AM";
        }
        else{
            res = res +"No puedes pasar gratis por el horario, tienes que pagar"
        }
        alert(res);
    }
    else{
        alert("No puedes pasar");
    }
    
}
horas = [23,24,0.4,0.6,1,2,3];
for(let hora of horas){
    validarCliente(hora);
}
