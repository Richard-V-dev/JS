class Vista{
    constructor(){
        this.input = document.getElementById("nueva-tarea");
        this.botonAgregar = document.getElementById("btn-agregar");
        this.botonBorrarTodo = document.getElementById("btn-borrar-todo")
        this.listaCompleta = document.getElementById("lista-tareas");
        this.listaTareasConcluidas = document.getElementById("lista-tareas-acabadas");
        this.listaTareasInconlusas = document.getElementById("lista-tareas-inconclusas");
    }
    mostrarTareas(tareas, callbacks){
        this.borrarListas();
        tareas.forEach((tarea,index) => {
            const li = document.createElement("li");

            const texto = document.createElement("span");
            texto.textContent = `Tarea n°${index+1}: ${tarea.getText()}`;
            texto.className = tarea.getCompleted()? "completado": "";
            texto.classList.add("textTask");
            texto.onclick = ()=> callbacks.completar(index);
            texto.style.cursor = "pointer";

            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "🗑️";
            btnEliminar.onclick = () => callbacks.eliminar(index);

            const btnEditar = document.createElement("button");
            btnEditar.textContent="Editar";
            btnEditar.onclick = ()=>{
            let textoEditado=prompt("Edita la tarea porfavor:");
                if(textoEditado!==null){
                    callbacks.editar(index,textoEditado);
                }
            };
            const contenedorBotones = document.createElement("span");
            contenedorBotones.className = "botones";
            contenedorBotones.append(btnEliminar,btnEditar);

            li.append(texto,contenedorBotones);
            this.listaCompleta.appendChild(li);
            
            const li2 = document.createElement("li");
            const texto2 = document.createElement("span");
            texto2.classList.add("textCompleatedTask");
            texto2.textContent = tarea.getCompleted()? `Tarea n°${index+1}: ${tarea.getText()}`:``;
            li2.append(texto2);
            this.listaTareasConcluidas.appendChild(li2);

            const li3 = document.createElement("li");
            const texto3 = document.createElement("span");
            texto3.classList.add("textUncompleatedTask");
            texto3.textContent = tarea.getCompleted()? ``:`Tarea n°${index+1}: ${tarea.getText()}`;
            li3.append(texto3);
            this.listaTareasInconlusas.appendChild(li3);
            
        });
    }
    borrarListas(){
        this.listaCompleta.innerHTML="";
        this.listaTareasConcluidas.innerHTML="";
        this.listaTareasInconlusas.innerHTML="";
    }
    onAgregarTarea(callback){
        this.botonAgregar.addEventListener("click",()=>{
            const texto= this.input.value.trim();
            callback(texto);
            this.input.value="";
        });
    }
    onBorrarTodo(callback){
        this.botonBorrarTodo.addEventListener("click",()=>{
            callback(); /**modelo.borrarTodo() */
        });
    }
}