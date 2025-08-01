const modelo = new CatPhraseModel();
const vista = new CatPhraseView();
const controlador = {
    getPhrase: ()=>modelo.getPhrase(),
};
vista.onPressingButton(controlador);