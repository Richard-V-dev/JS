let cant_est = parseInt(prompt("Cuantos estudiantes son en total?"));
let alumnos=[];
for(let i = 0; i<cant_est;i++){
    alumnos[i] = [prompt("nombre del alumno: "+ (i+1)),0];
}
let dias_curso=5;
for(let alumno of alumnos){
    for(let i=0;i<dias_curso;i++){
        let asistencia = prompt("Asistencia de "+ alumno[0]+ ". Día: "+(i+1)+", ¿Presente (P) o ausente (A)?");
        if(asistencia.toLowerCase()=="p"){
            alumno[1]=alumno[1]+1;
        }
    }
}

document.writeln(`Total de estudiantes: ${cant_est}<br>`);
for (let alumno of alumnos){
    res = `${alumno[0]}: <br>
            __________asistencias: ${alumno[1]} <br>
            __________faltas: ${dias_curso-alumno[1]} <br>`;
    if(alumno[1]>=3){
        res += "<span style='color:red; font-weight:bold;'>**********CUMPLES CON EL MÍNIMO DE ASISTENCIA, FELICIDADES!!!*************</span> <br>"
    }else{
        res += "<span style='color:red; font-weight:bold;'>////////////////LO SENTIMOS, NO CUMPLES CON EL MÍNIMO DE ASISTENCIA///////////////</span> <br>"
    }        
    document.writeln(res);
}

//alert(alumnos[0][1]);