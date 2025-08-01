let tp = "100 minutos de trabajo práctico";
let estudio =  "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de homework";
//let trabajos_practicos = "100 minutos/día";
let descanso = "10 minutos de descanso";


for (let i = 0; i <14; i++) {
    if(i==0){
        console.group("Semana 1");
    }
    console.log("TAREAS");
    console.groupCollapsed("día"+(i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i==7){
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}
console.groupEnd();
