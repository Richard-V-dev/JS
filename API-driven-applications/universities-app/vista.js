class UniversityView{
    constructor(){
        this.input = document.getElementById("input");
        this.button = document.getElementById("btn");
        this.answer = document.getElementById("resultado");
    }
    async onPressingButton(callbacks){
        this.button.addEventListener("click",async ()=>{
            const country = this.input.value.trim();
            if(country){
                this.showLoading();
                try{
                    const dataJSON = await callbacks.getCountry(country.toLowerCase());
                    console.log(dataJSON);
                    this.showCountry(dataJSON);
                }
                catch(error){
                    this.showError(error.message);
                }
            }
        });
    }
    showLoading(){
        this.answer.innerHTML = "Cargando...";
    }
    showError(msg){
        this.answer.innerHTML = `<p style="color:red">${msg}</p>`;
    }
    showCountry(universitiesList){
        this.answer.innerHTML="";
        const ul = document.createElement("ul");
        universitiesList.forEach(university => {
            const li = document.createElement("li");
            li.innerHTML=`<strong>${university.name}</strong> <br>
                            <a href=${university.web_pages[0]} target="_blank">${university.web_pages[0]}</a>`
            ul.appendChild(li);
        });
        this.answer.appendChild(ul);
    }
}