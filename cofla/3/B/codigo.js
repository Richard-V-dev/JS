class App{
    constructor(nombre,descargas, puntuacion,peso){
        this.nombre=nombre
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalada = false;
        this.abierta=false;
    }
    info(){
        return `
        <span onclick="(() => alert('Instalando app: ${this.nombre}...'))()">
        Nombre: ${this.nombre}</span> <br>
        Descargas:${this.descargas}> <br>
        Puntuación: ${this.puntuacion} <br>
        Peso: ${this.peso} <br>
        Instalada: ${this.instalada}<br>`
    }
    instalar(){
        if(!this.instalada){
            alert(`La app ${this.nombre} se está instalando...`);
            this.instalada=true;
        }else{
            alert(`La app ${this.nombre} se está ya instalada...`);
        }
    }
    desinstalar(){
        if(this.instalada){
            alert(`La app ${this.nombre} se está desinstalando...`);
            this.instalada=false;
        }
    }
    abrir(){
        if(this.instalada){
            if(this.abierta==false){
                alert(`La app ${this.nombre} se está abriendo...`);
                this.abierta=true;
            }
        }
    }
    cerrar(){
        if(this.instalada){
            if(this.abierta==true){
                alert(`La app ${this.nombre} se está cerrando...`);
                this.abierta=false;
            }
        }
    }
}

let apps = [];
apps[0]=new App("APP 1","16.000","3 estrellas","90 MB");
apps[1]=new App("APP 2","18.000","4 estrellas","100 MB");
apps[2]=new App("APP 3","20.000","5 estrellas","120 MB");

apps[0].instalar();
apps[0].desinstalar();
apps[0].instalar();
apps[0].abrir();
apps[0].cerrar();

document.writeln(`<h2>App nuevas: </h2>`)
for(let pos in apps){
    document.writeln(`<p> ${parseInt(pos)+1}) ${apps[pos].info()} <br></p>`);
};
