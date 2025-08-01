/*function esperarParaSaludar(callback){
    setTimeout(()=>{
        console.log("Ya pasaron 2 seg.");
        callback();
    },2000);
}
esperarParaSaludar(()=>{
    console.log("Hola mundo!");
});
const miPromesa1 = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("¡La promesa se cumplió!");
    }
    else{
        reject("❌ Hubo un error");
    }
});
miPromesa1
    .then((resultado)=>{
        console.log(resultado);
    })
    .catch((error)=>{
        console.log(error);
    });*/
    /*
const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Han pasado 4 segundos")
    },4000);
});

miPromesa
    .then((msg)=>console.log(msg))
    .catch((error)=>console.log(error));*/
/*function calentandoSopa(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Sopa calentada");
        },4000);
    });
}
async function prepararCena(){
    console.log("1.-Poniendo la mesa...")
    const sopa = await calentandoSopa();
    console.log("2.-",sopa);
    console.log("3.-Cena servida");
}
prepararCena();*/
/*
function buscarUsuario(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({nombre:"Richard",apellido:"Veizaga"});
        },3000);
    });
}
async function mostrarUsuario(){
    console.log("Buscando usuario");
    const usr = await buscarUsuario();
    console.log(usr);
    console.log("Usuario encontrado");
} 
mostrarUsuario();
*/
function obtenerDatos(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const exito = false;
            if(exito){
                resolve("Datos recibidos");
            }
            else{
                reject("Error al obtener los datos");
            }
        },2000);
    });
    
}
async function cargarDatos(){
    try{
        console.log("Empezando");
        const datos = await obtenerDatos();
        console.log(datos);
    }
    catch(error){
        console.log("Ocurrió un error", error);
    }
    finally{
        console.log("Fin");
    }
}
cargarDatos();