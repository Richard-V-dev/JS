class CountryModel{
    async getCountry(nombre){
        const url = `https://restcountries.com/v3.1/name/${nombre}`;
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("País no encontrado");
        }
        const data = await response.json();
        return data[0];
    }
}