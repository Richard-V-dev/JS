let frutas=["banana","manzana","pera"];
//document.write(frutas);
let pc={
    nombre: "RichardPC",
    procesador: "inter Core I7",
    ram:"16GB",
    espacio:"1TB",
};
frase=`el nombre de mi PC es: <span>${pc["nombre"]} </span> <br>
        el procesador es:  <span>${pc["procesador"]} </span><br>
        la memoria RAM es:  <span>${pc["ram"]}</span> <br>
        el espacio en disco es: <span> ${pc["espacio"]}</span>`;
document.write(frase);