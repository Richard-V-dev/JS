const modelo = new UniversityModel();
const vista = new UniversityView();
const controlador = {
    getCountry: (country)=>modelo.getCountry(country),
};

vista.onPressingButton(controlador);