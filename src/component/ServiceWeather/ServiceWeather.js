class ServiceWeather {
    constructor(city){
        this._apiKey = `92e98e2eaca242823e9af236aecfe0cb`;
        this._cityName = city
    }

   


    getData = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${this._cityName}&appid=${this._apiKey}&units=metric&lang=ru`;
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибочка ${response.status}`);
        }

        let data = await response.json();

        return {
            weatherTemp: data.main.temp,
            weatherTempFeels: data.main.feels_like,
            weatherСondition: data.weather[0].description,
            windSpeed: data.wind.speed,
            weatherHumidity: data.main.humidity,
            cityName: data.name,
            weatherId: data.weather[0].id,
        };
    };

    getDataList = async () => {
        // let url = `https://api.openweathermap.org/data/2.5/forecast?q=${this._cityName}&appid=${this._apiKey}&units=metric&lang=ru`;
        
        // let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибочка ${response.status}`);
        }

        let data = await response.json();
        let arr = data.list.filter(item => item.dt_txt.indexOf('12', 11) !== -1)
        return {
            arr
        };
    };
}

export default ServiceWeather;
