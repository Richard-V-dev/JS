const modelo = new ListaAlumnosReprobadosModelo();
modelo.addStudent(new AlumnoReprobado("Richard Veizaga","veizagaRichard@gmail.com","Física general"));
modelo.addStudent(new AlumnoReprobado("Juan Pérez","juanPerez@gmail.com","Introducción a la programación"));
modelo.addStudent(new AlumnoReprobado("Camila Vera","veraCamila@gmail.com","Álgebra lineal"));
modelo.addStudent(new AlumnoReprobado("Penélope Cruz","cruzPenelope@gmail.com","Cálculo I"));
modelo.addStudent(new AlumnoReprobado("Dafne Olivera","dafneOlivera@gmail.com","Inglés I"));

const vista = new ListaAlumnosReprobadosVista();
const controlador = {
    htmlCode: ()=>modelo.htmlCode(),
};

vista.showingList(controlador);
vista.onPressingSubmit(controlador);
