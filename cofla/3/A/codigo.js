class Celular{
    constructor(modelo,color, peso,tamano, resolucion,ram){
        this.modelo=modelo
        this.color = color;
        this.peso = peso;
        this.tamano = tamano;
        this.resolucion = resolucion;
        this.ram = ram;
        this.encendido=false;
    }
    mobileInfo(){
        return `
        <span class="first-child" onclick="(() => alert('Elegiste el modelo ${this.modelo}'))()">Modelo: ${this.modelo}</span> <br>
        <span>Color:${this.color}</span> <br>
        <span>Peso: ${this.peso}</span> <br>
        <span>Tamaño: ${this.tamano}</span> <br>
        <span>Resolución:${this.resolucion}</span> <br>
        <span>RAM:${this.ram}</span> <br>`
    }
    presionarBotonEncendido(){
        if(!this.encendido){
            alert(`El celular se está prendiendo...`);
            this.encendido=true;
        }else{
            alert("celular apagandose...");
            this.encendido=false;
        }
    }
    reiniciar(){
        if(this.encendido){
            alert("reiniciando celular");
        } else{
            alert("el celular está apagado, no se puede reiniciar")
        }
    }
    tomarFotos(){
        alert(`El celular ${this.nombre} tomó una fotografía en ${this.resolucion}`)
    }
    grabarVideo(){
        alert(`Grabando video en ${this.resolucion}`);
    }
}
class CelularAltaGama extends Celular{
    constructor(modelo,color, peso,tamano, resolucion,ram){
        super(modelo,color, peso,tamano, resolucion,ram);
    }
    grabarCamaraLenta(){
        alert(`Se está grabando en cámara lenta`);
    }
    reconocimientoFacial(){
        alert(`Se está realizando el reconocimiento facial`);
    }
    usarCamaraExtra(){
        alert(`Se está usando la cámara extra`);
    }

}
let celulares = [];
celulares[0]=new Celular("A1","rojo","150g","5'","hd","5GB");
celulares[1]=new Celular("B2","negro","155g","5.4'","full hd","1GB");
celulares[2]=new Celular("C3","blanco","153g","5.9'","ultra hd","1GB");
///celulares[0].presionarBotonEncendido();
document.writeln(`<h2>Celulares normales: </h2>`)
for(let pos in celulares){
    document.writeln(`<div class="contenedor"> ${parseInt(pos)+1}) ${celulares[pos].mobileInfo()} <br><div>`);
};

let celularesAltaGamma = [];
celularesAltaGamma[0]=new CelularAltaGama("A1-AG","rojo","150g","5'","hd","5GB");
celularesAltaGamma[1]=new CelularAltaGama("B2-AG","negro","155g","5.4'","full hd","1GB");
celularesAltaGamma[2]=new CelularAltaGama("C3-AG","blanco","153g","5.9'","ultra hd","1GB");

celularesAltaGamma[0].presionarBotonEncendido();
celularesAltaGamma[0].reiniciar();
celularesAltaGamma[0].grabarVideo();
celularesAltaGamma[0].grabarCamaraLenta();
celularesAltaGamma[0].reconocimientoFacial();

document.writeln(`<h2>Celulares alta gamma: </h2>`)
for(let pos in celulares){
    document.writeln(`<div class="contenedor"> ${parseInt(pos)+1}) ${celularesAltaGamma[pos].mobileInfo()} <br><div>`);
};