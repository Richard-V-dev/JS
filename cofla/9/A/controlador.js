const modelo = new FormularioModelo();
const vista = new FormularioVista();
const controlador = {
    getName: ()=>modelo.getName(),
    getEmail: ()=>modelo.getEmail(),
    getSubject: ()=>modelo.getSubject(),
    setName: (name)=>modelo.setName(name),
    setEmail: (email)=>modelo.setEmail(email),
    setSubject: (subject)=>modelo.setSubject(subject),
    validarCampos: ()=>modelo.validarCampos(),
};
vista.onPressingSubmit(controlador);