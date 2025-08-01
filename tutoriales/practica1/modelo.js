class ProductListModel{
    constructor(){
        this.lista=[];
    }
    getLista(){
        return this.lista;
    }
    setLista(lista){
        this.lista = lista;
    }
    addProduct(product){
        this.lista.push(product);
    }
}
class Product{
    static id=0;
    constructor(name){
        Product.id++;
        this.id = Product.id;
        this.name = name;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
}