/*let numero = 0;
while (numero<10){
    numero++;
    document.write(numero+" " );
}*/
let animales = ["gato","perro","TRex"];
for (pos_animal in animales){
    document.writeln("Animal :"+ animales[pos_animal]+"|Pos animal: "+ pos_animal+ "<br>");
}
document.writeln("");
for (animal of animales){
    document.writeln(animal)
}