class ListaAlumnosReprobadosVista{
    constructor(){
        this.gridContainer = document.getElementById("grid-container");
        this.submit = document.getElementById("submit");

    }
    showingList(callbacks){
        this.gridContainer.innerHTML = callbacks.htmlCode();
    }
    onPressingSubmit(callbacks){
        this.submit.addEventListener("click",()=>{
            let confirmation = confirm("Do you really want to confirm the exams?");
            if(confirmation==true){
                document.body.removeChild(this.submit);
                let weeks = document.querySelectorAll(".week");
                let selected_weeks = document.querySelectorAll(".selected-week");
                let i = 0;
                for (let week of weeks){
                    week.innerHTML=selected_weeks[i].value;
                    i++;
                }
            }
        });
    }
    
} 