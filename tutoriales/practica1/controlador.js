const modelo = new ProductListModel();
modelo.addProduct(new Product("Monitor"));
modelo.addProduct(new Product("Teclado"));
modelo.addProduct(new Product("Mouse"));
modelo.addProduct(new Product("Laptop"));
const vista = new ProductListView();
const constructor = {
    getLista: ()=>modelo.getLista(),
    setLista: (list)=>modelo.setLista(list),
    addProduct: (product)=>modelo.addProduct(product),
};
vista.onPressingButton(constructor);
