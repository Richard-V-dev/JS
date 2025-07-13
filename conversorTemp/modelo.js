class TempConversor{
    constructor(temp, scale){
        this.scale = scale;
        this.temp = temp;
    }
    getTempK(){
        if (this.scale=="K"){
            return this.temp;
        }
        else{
            return parseFloat((273.15+this.getTempC()).toFixed(2));
        }
    }
    getTempR(){
        if (this.scale=="R"){
            return this.temp;
        }
        else{
            return parseFloat((491.67+(9/5)*this.getTempC()).toFixed(2));
        }
    }
    getTempF(){
        if (this.scale=="F"){
            return this.temp;
        }
        else{
            return parseFloat((32+(9/5)*this.getTempC()).toFixed(2));
        }
    }
    getTempC(){
        switch(this.scale){
            case "K": return parseFloat((this.getTempK()-273.15).toFixed(2));
            break;
            case "C": return this.temp;
            break;
            case "F": return parseFloat(((this.getTempF()-32)*(5/9)).toFixed(2));
            break;
            case "R": return parseFloat(((this.getTempR()-491.67)*(5/9)).toFixed(2));        
            break;
        }
    }
    setTemp(temp){
        this.temp=temp;
    }
    setScale(scale){
        this.scale=scale;
    }
}
