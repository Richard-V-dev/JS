class UniversityModel{
    async getCountry(country){
        const url = `http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`;
        const response = await fetch(url);
        console.log(response.ok);
        if(!response.ok){
            throw new Error("Error de conexión con la API");
        }
        const data =  await response.json();
        if (data.length === 0){
            throw new Error("El país no existe o no se encontraron universidades para ese país");
        }
        return data;
    }
}