import ServiceWeather from '../ServiceWeather/ServiceWeather';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';

import ViewCrad from '../component/ViewCrad/ViewCrad';
import СardList from '../component/CardList/СardList';
import Search from '../component/Search/Search';

class App extends Component {
    state = {
        weatherToDay: {},
        weatherToWeek: {},
        city: 'Москва',
        cityUpdate: false,
    };

    weather = new ServiceWeather(this.state.city);

    componentDidMount() {
        this.updateWeatherToDay();
        this.updateWeatherToWeek();
    }

    componentDidUpdate() {
        if (this.state.cityUpdate !== false) {
            this.updateWeatherToDay();
            this.updateWeatherToWeek();
            this.setState({ cityUpdate: false });
        }
    }

    hendleWeather = (weatherToDay) => {
        this.setState({ weatherToDay });
    };
    hendleWeatherToWeek = (weatherToWeek) => {
        this.setState({ weatherToWeek });
    };
    updateWeatherToDay = () => {
        this.weather.getData().then(this.hendleWeather);
    };
    updateWeatherToWeek = () => {
        this.weather.getDataList().then(this.hendleWeatherToWeek);
    };

    handleChange = (value) => {
        this.setState({ city: value });
    };

    handleClick = () => {
        this.setState({ cityUpdate: true });
        this.weather = new ServiceWeather(this.state.city);
    };

    render() {
        const {
            weatherTemp,
            weatherTempFeels,
            weatherСondition,
            windSpeed,
            weatherHumidity,
            cityName,
            weatherId,
        } = this.state.weatherToDay;
        const { weatherToWeek } = this.state;

        return (
            <>
                <div className="App">
                    <div className="App-header">
                        <h1 className="App__title">Open Weather Api</h1>
                        <Search
                            handleChange={this.handleChange}
                            handleClick={this.handleClick}
                        ></Search>
                        <h2 className='App__city'>{cityName}</h2>
                        <h3 className="App__weather-to-day">Погода на сегодня</h3>
                        <ViewCrad
                            weatherTemp={weatherTemp}
                            weatherTempFeels={weatherTempFeels}
                            weatherСondition={weatherСondition}
                            windSpeed={windSpeed}
                            weatherHumidity={weatherHumidity}
                            cityName={cityName}
                            // handleChange = {this.handleChange}
                            // handleClick = {this.handleClick}
                            weatherId={weatherId}
                        ></ViewCrad>
						<h3 className="weather-to-week__wrapper">Погода на неделю</h3>
                        <div className="weatherToWeek__wrapper">
                            <СardList weatherToWeek={weatherToWeek}></СardList>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
