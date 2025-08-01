class ProductListView{
    constructor(){
        this.button = document.getElementById("cargarBtn");
        this.list = document.getElementById("listaProductos");
    }
    showList(callbacks){
        this.list.innerHTML = "";
        callbacks.getLista().forEach(elto => {
            const li = document.createElement("li");
            li.textContent = `🛍️${elto.getId()}.- ${elto.getName()}`;
            this.list.appendChild(li);
        });
    }
    getProductList(callbacks){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(callbacks);
            },5000);
        });
    }
    async onPressingButton(callbacks){
        this.button.addEventListener("click",async ()=>{
            try{
                const productos = await this.getProductList(callbacks);
                this.showList(callbacks);
            }
            catch(error){
                alert("Error al cargar productos");
            }
        });
    }
}