class Persona{
    constructor(nombre){
        this.nombre=nombre;
    }
    getNombre(){
        return this.nombre;
    }
}
class Materia{
    constructor(nombre, profesor){
        this.nombre = nombre;
        this.alumnos = [];
        this.profesor = profesor;
        this.alumnadoMaximo = 6;
    }
    addAlumno(alumno){
        let bb = false;
        if (this.alumnos.length<this.alumnadoMaximo) {
            this.alumnos.push(alumno);
            bb = true;
        }
        return bb;
    }
    getProfesor(){
        return this.profesor;
    }
    getAlumnadoMaximo(){
        return this.alumnadoMaximo;
    }
    listar(){
        let res = `+++Materia: ${this.nombre}<br> **Profesor: ${this.profesor.getNombre()} <br>`;
        for(let pos in this.alumnos){
            res += `-Alumno ${1+parseInt(pos)}: ${this.alumnos[pos].getNombre()}<br>`
        }
        return res;
    }
    getNombre(){
        return this.nombre;
    }
    buscarAlumno(nombreAlumno){
        let bb = false;
        for (let alumno of this.alumnos){
            if (alumno.getNombre().toLowerCase()==nombreAlumno.toLowerCase()){
                bb = true; 
                break;
            }
        }
        //this.alumnos.some((alumno)=>{bb= alumno.getNombre()==nombreAlumno})
        return bb;
    }

}
class Carrera{
    constructor(nombre){
        this.nombre = nombre;
        this.materias = [];
    }
    addMateria(nombreMateria,nombreDocente){
        this.materias.push(new Materia(nombreMateria, new Persona(nombreDocente)));
    }
    addAlumno(nombreMateria,nombreAlumno){
        let bb  =false;
        this.materias.forEach((materia)=>{
            if (materia.getNombre()===nombreMateria) {
                bb = materia.addAlumno(new Persona(nombreAlumno));
                }
            }
        );
        return bb;
    }
    getMaterias(){
        return this.materias;
    }
    listAll(){
        let res = `####Carrera: ${this.nombre} <br>`;
        for(let materia of this.materias){
            res+=materia.listar();
        }
        return res;
    }
    listarMateria(nombre){
        let res="";
        this.materias.forEach((materia)=>{
            if(materia.getNombre()===nombre)
                {res = materia.listar();
                }
            }
        );
        return res;
    }
    getNombre(){
        return this.nombre;
    }/*
    contarMateriasPorAlumno(nombreAlumno){
        let count=0;
        this.materias.forEach((materia)=>{if(materia.buscarAlumno(nombreAlumno)){
            count++;
        }});
        return count;
    }*/
    buscarAlumno(nombreAlumno){
        let count=0,res=`Alumno ${nombreAlumno}:<br>`;
        this.materias.forEach((materia)=>{if(materia.buscarAlumno(nombreAlumno)){
            count++;
            res += `${count}) Materia: ${materia.getNombre()} - Profesor: ${materia.getProfesor().getNombre()} <br>`;
        }});
        res +=`Total materias: ${count} <br>`;
        return res 
    }
}

function main(){
    let carrera = new Carrera("Informática");

    carrera.addMateria("Cálculo I", "Lucio Gonzáles");
    carrera.addMateria("Algebra lineal", "Pedro Saavedra");
    carrera.addMateria("Introducción a la programación", "Luis Miranda");
    carrera.addMateria("Inglés I", "Lucio Alejo");
    //carrera.addMateria(new Materia("Física general", new Persona("Ramiro Delgadillo")));

    carrera.addAlumno("Cálculo I","Isabel Ricaldez");
    carrera.addAlumno("Cálculo I","Dario Pérez");
    carrera.addAlumno("Cálculo I","Samantha Ramallo");
    carrera.addAlumno("Cálculo I","Juán Bustamante");
    carrera.addAlumno("Cálculo I","Richard Veizaga");
    carrera.addAlumno("Cálculo I","Cofla Espíndola");
    carrera.addAlumno("Algebra lineal","Jorge Olgín");
    carrera.addAlumno("Algebra lineal","Minerva Guarachi");
    carrera.addAlumno("Algebra lineal","Jorge Olgín");
    carrera.addAlumno("Algebra lineal","María Guamán");
    carrera.addAlumno("Algebra lineal","Mario Espinoza");
    carrera.addAlumno("Algebra lineal","Cofla Espíndola");
    carrera.addAlumno("Introducción a la programación","Camila Villena");
    carrera.addAlumno("Introducción a la programación","Camila Claros");
    carrera.addAlumno("Introducción a la programación","Melanie Rivas");
    carrera.addAlumno("Introducción a la programación","Santiago Mamani");
    carrera.addAlumno("Introducción a la programación","Daniel Jáuregui");
    carrera.addAlumno("Inglés I","Jamil Alba");
    carrera.addAlumno("Inglés I","Roger Barrientos");
    carrera.addAlumno("Inglés I","Samantha Ramallo");
    carrera.addAlumno("Inglés I","Adriana Sierraalta");
    carrera.addAlumno("Inglés I","Roger Sandoval");

    let op = parseInt(prompt(`Carrera: ${carrera.getNombre()}\n1.-Inscribir alumno\n2.-Listar Materias\n3.-Buscar alumno`));
    let nombreAlumno = "", nombreMateria="";
    switch (op){
        case 1: let opMateria = parseInt(prompt(`Carrera: ${carrera.getNombre()}\nInscribir en:\n1.-Cálculo I\n2.-Algebra lineal\n3.-Introducción a la programación\n4.-Inglés I`));
                switch(opMateria){
                   case 1: nombreMateria="Cálculo I";
                   break;
                   case 2: nombreMateria="Algebra lineal" ;
                   break;
                   case 3: nombreMateria = "Introducción a la programación";
                   break;
                   case 4: nombreMateria = "Inglés I";
                   break;
                }
                nombreAlumno = prompt(`Introduce el nombre del alumno:`);
                if (carrera.addAlumno(nombreMateria,nombreAlumno)==true){
                    document.writeln(`<div><p>Alumno añadido exitosamente <br></p></div>`)
                }else{
                    document.writeln(`<div><p>Alumno no fue añadido, curso lleno <br></p></div>`)
                }
                document.writeln(`<div><p>${carrera.buscarAlumno(nombreAlumno)}</p></div>`)
        break;
        case 2: op = parseInt(prompt(`Carrera: ${carrera.getNombre()}\nListar:\n1.-Cálculo I\n2.-Algebra lineal\n3.-Introducción a la programación\n4.-Inglés I\n5.-Todas`));
                switch (op){
                    case 1: document.writeln(`<div><p>${carrera.listarMateria("Cálculo I")}</p></div>`);
                    break;
                    case 2: document.writeln(`<div><p>${carrera.listarMateria("Algebra lineal")}</p></div>`);
                    break;
                    case 3: document.writeln(`<div><p>${carrera.listarMateria("Introducción a la programación")}</p></div>`);
                    break;
                    case 4: document.writeln(`<div><p>${carrera.listarMateria("Inglés I")}</p></div>`);
                    break;
                    default: document.writeln(`<div><p>${carrera.listAll()}</p></div>`);
                    break;
                }
        break;
        case 3: nombreAlumno = prompt(`Introduce el nombre del alumno:`);
                document.writeln(`<div><p>${carrera.buscarAlumno(nombreAlumno)}</p></div>`)
        break;
    }
    
    //document.writeln(`<div><p>${carrera.listAll()}</p></div>`);
}
main();