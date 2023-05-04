import ServiceWeather from '../component/ServiceWeather/ServiceWeather';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';


import ViewCrad from '../component/ViewCrad/ViewCrad';

class App extends Component {
    state = {
        weatherToDay: {},
		city: 'Москва',
		cityUpdate: false

    };

   	weather = new ServiceWeather(this.state.city);

    componentDidMount() {
		this.updateWeatherToDay();

    }
	componentDidUpdate(){
		if(this.state.cityUpdate !== false){
			this.updateWeatherToDay()
			this.setState({cityUpdate: false})
		}
	}

    hendleWeatherToDay = (weatherToDay) => {
        this.setState({ weatherToDay });
    };

    updateWeatherToDay = () => {
        this.weather.getData().then(this.hendleWeatherToDay);
    };
	handleChange = (value) => {
		this.setState({city: value})
	}

	handleClick = (e) => {
		e.preventDefault()
		this.setState({cityUpdate: true})
		this.weather = new ServiceWeather(this.state.city);
		
		
	}
    render() {
        const { weatherTemp, weatherTempFeels, weatherСondition, windSpeed, weatherHumidity, cityName, weatherId} = this.state.weatherToDay;
        return (
		<>	
			<div className='App'>
				<div className="App-header">
					<ViewCrad 
						weatherTemp = {weatherTemp}
						weatherTempFeels = {weatherTempFeels}
						weatherСondition = {weatherСondition}
						windSpeed = {windSpeed}
						weatherHumidity = {weatherHumidity}
						cityName = {cityName}
						handleChange = {this.handleChange}
						handleClick = {this.handleClick}
						weatherId = {weatherId}>
					</ViewCrad>
				
				</div>
				
			</div>
		</>
		)
    }
}


export default App;
