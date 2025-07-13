class Task{
    constructor(text, completed=false){
        this.text=text;
        this.completed=completed;
    }
    getText(){
        return this.text;
    }
    getCompleted(){
        return this.completed;
    }
    alternCompleted(){
        this.completed = !this.completed;
    }
}
class TaskList{
    constructor(){
        const datosGuardados = localStorage.getItem("tareas");
        if (datosGuardados){
            this.tasks= (JSON.parse(datosGuardados)).map(obj=>new Task(obj.text,obj.completed))
        }
        else{
            this.tasks=[];
        }
        console.log("Tareas cargadas del localStorage:", this.tasks);
    }
    guardar(){
        localStorage.setItem("tareas",JSON.stringify(this.tasks))
    }
    addTask(text){
        this.tasks.push(new Task(text));
        this.guardar();
    }
    deleteTask(index){
        this.tasks.splice(index,1);
        this.guardar();
    }
    alternCompleted(index){
        this.tasks[index].alternCompleted();
        this.guardar();
    }
    getTasks(){
        return this.tasks;
    }
    borrarTodo(){
        this.tasks = [];
        this.guardar();
    }
    editTask(index,text){
        this.tasks.splice(index,1);
        this.tasks.splice(index,0,new Task(text));
        this.guardar();
    }
}