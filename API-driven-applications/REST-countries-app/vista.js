class CountryView{
    constructor(){
        this.input = document.getElementById("paisInput");
        this.button = document.getElementById("buscarBtn");
        this.answer = document.getElementById("resultado");
    }
    async onPressingButton(callbacks){
        this.button.addEventListener("click",async()=>{
            const country = this.input.value.trim();
            if(country){
                this.showLoading();
                try{
                    const data = await callbacks.getCountry(country.toLowerCase());
                    console.log(data);
                    this.showCountry(data);
                }
                catch(error){
                    this.showErrorMsg(error.message);
                }
            }
        });
    }
    showLoading(){
        this.answer.innerHTML = "Cargando...";
    }
    showErrorMsg(msg){
        this.answer.innerHTML = `<p style="color: red;">${msg}</p>`;
    }
    showCountry(data){
        this.answer.innerHTML = `<h2>${data.name.common}</h2>
                                <img src="${data.flags.png}" alt="Bandera de ${data.name.common}" width="200">
                                <p><strong>Capital:</strong> ${data.capital?.[0] || "N/A"}</p>
                                <p><strong>Población:</strong> ${data.population.toLocaleString()}</p>
                                <p><strong>Región:</strong> ${data.region}</p>`;
    }
}

