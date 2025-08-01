class FormularioModelo{
    constructor(){
        this.name = "";
        this.email = "";
        this.subject = "";
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
    validarCampos(){
        if(this.name.trim().length<5||this.name.trim().length>40){
            throw new NombreInvalidoError("Logitud del nombre menor a 5 o mayor a 40");
        }
        else if(this.email.trim().length<5||
                this.email.trim().length>40||
                this.email.indexOf("@")==-1||
                this.email.indexOf(".")==-1){
            throw new EmailInvalidoError("Logitud del email es menor a 5 o mayor a 40 o no contiene @ o no continene .");
        } 
        else if(this.subject.trim().length<5||this.subject.trim().length>40){
            throw new MateriaInvalidaError("Logitud de la materia menor a 5 o mayor a 40");
        }
    }
}
class NombreInvalidoError extends Error{
    constructor(mensaje){
        super(mensaje);
    }
}
class EmailInvalidoError extends Error{
    constructor(mensaje){
        super(mensaje);
    }
}
class MateriaInvalidaError extends Error{
    constructor(mensaje){
        super(mensaje);
    }
}