const calificaciones_cofla = {
    "cálculo I":[90,6,3],
    "álgebra lineal":[84,8,2],
    "inglés I":[92,8,4],
    "introducción a la programación": [78,7,4],
    "física general": [100,10,4],
}
const asistencia = ()=>{
    for (let key in calificaciones_cofla){
        console.log(key);
        if (calificaciones_cofla[key][0]>=90){
            console.log("%c    Asistencias en orden","color:green");
        }else{
            console.log("%c    Faltan asistencias","color:red");
        }
        if(calificaciones_cofla[key][1]>=7){
            console.log("%c    Promedio general aprobado","color:green");
        }else{
            console.log("%c    Promedio general reprobado","color:red");
        }
        if(calificaciones_cofla[key][2]>=3){
            console.log("%c    Tareas aprobado","color:green");
        }else{
            console.log("%c    Tareas reprobado","color:red");
        }
    };
}
asistencia();