class Vista{
    constructor(){
        this.inputK = document.getElementById("K");
        this.inputC = document.getElementById("C");
        this.inputR = document.getElementById("R");
        this.inputF = document.getElementById("F");
    }
    onChangingInputC(callback){
        this.inputC.addEventListener("change",()=>{
            const temp= parseFloat(this.inputC.value.trim());
            const dicc = callback(temp);
            if(!isNaN(temp)){
                if (temp>=-273.15){
                    this.inputK.value = dicc["K"];
                    this.inputR.value = dicc["R"];
                    this.inputF.value = dicc["F"];
                }
            }
            else{    
                this.inputK.value = this.inputK.placeholder;
                this.inputR.value = this.inputR.placeholder;
                this.inputF.value = this.inputF.placeholder;
            }
        });
    }
    onChangingInputF(callback){
        this.inputF.addEventListener("change",()=>{
            const temp= parseFloat(this.inputF.value.trim());
            const dicc = callback(temp);
            if(!isNaN(temp)){
                if (temp>=-459.67){
                    this.inputK.value = dicc["K"];
                    this.inputR.value = dicc["R"];
                    this.inputC.value = dicc["C"];
                    }
                }
                else{
                    this.inputC.value = this.inputC.placeholder;
                    this.inputR.value = this.inputR.placeholder;
                    this.inputK.value = this.inputK.placeholder;
                }
        });
    }
    onChangingInputK(callback){/**************** */
        this.inputK.addEventListener("change",()=>{
            const temp= parseFloat(this.inputK.value.trim());
            const dicc = callback(temp);
            if(!isNaN(temp)){
                if (temp>=0){
                    this.inputC.value = dicc["C"];
                    this.inputR.value = dicc["R"];
                    this.inputF.value = dicc["F"];
                    }
                }    
                else{
                    this.inputC.value = this.inputC.placeholder;
                    this.inputR.value = this.inputR.placeholder;
                    this.inputF.value = this.inputF.placeholder;
                }
        });
    }
    onChangingInputR(callback){
        this.inputR.addEventListener("change",()=>{
            const temp= parseFloat(this.inputR.value.trim());
            const dicc = callback(temp);
            if(!isNaN(temp)){
                if (temp>=0){
                    this.inputK.value = dicc["K"];
                    this.inputC.value = dicc["C"];
                    this.inputF.value = dicc["F"];
                    }
                }    
                else{
                    this.inputK.value = this.inputK.placeholder;
                    this.inputC.value = this.inputC.placeholder;
                    this.inputF.value = this.inputF.placeholder;
                }
        });
    }
}
