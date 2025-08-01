const modelo = new CountryModel();
const vista = new CountryView();
const controlador = {
    getCountry: (name)=>modelo.getCountry(name),
};
vista.onPressingButton(controlador);