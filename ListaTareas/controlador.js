const modelo = new TaskList();
const vista = new Vista();

function render(){
    vista.mostrarTareas(modelo.getTasks(),{
        completar: (index)=>{
            modelo.alternCompleted(index);
            render();
        },
        eliminar: (index)=>{
            modelo.deleteTask(index);
            render();
        },
        editar: (index,textEditado)=>{
            modelo.editTask(index,textEditado);
            render();
        }
    });
}
vista.onAgregarTarea((text)=>{
    modelo.addTask(text);
    render();
});
vista.onBorrarTodo(()=>{
    modelo.borrarTodo();
    render();
})
render();