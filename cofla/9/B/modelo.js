class ListaAlumnosReprobadosModelo{
    constructor(lista=[]){
        this.lista=lista;
    }
    getList(){
        return this.lista;
    }
    setList(lista){
        this.lista = lista;
    }
    addStudent(student){
        this.lista.push(student);
    }
    htmlCode(){
        let html=``;
        for(let elto of this.lista){
            html += elto.htmlCode();
        }
        return html;
    }
}
class AlumnoReprobado{
    constructor(name,email,subject){
        this.name = name;
        this.email = email;
        this.subject = subject;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getSubject(){
        return this.subject;
    }
    setName(name){
        this.name=name;
    }
    setEmail(email){
        this.email=email;
    }
    setSubject(subject){
        this.subject=subject;
    }
    htmlCode(){
        return `<div class="grid-item name">${this.name}</div>
        <div class="grid-item email">${this.email}</div>
        <div class="grid-item subject">${this.subject}</div>
        <div class="grid-item week">
            <select class="selected-week">
                <option value="semana 1">Semana 1</option>
                <option value="semana 2">Semana 2</option>
            </select>
        </div>`
    }
    
}