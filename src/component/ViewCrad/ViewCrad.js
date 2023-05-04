import './ViewCrad.css';

import search from './search.gif';

import sun from './sun.gif';
import cloudy from './cloudy.gif';
import rein from './rein.gif';
import drizzle from './drizzle.gif';
import foggy from './foggy.gif';
import snow from './snow.gif';
import storm from './storm.gif';

import celsius from './celsius.png';
import drop from './drop.png';
import wind from './wind.png';

const ViewCrad = ({
    weatherTemp,
    weatherTempFeels,
    weatherСondition,
    windSpeed,
    weatherHumidity,
    cityName,
    handleChange,
    handleClick,
    weatherId,
}) => {
    let Id = Number(weatherId);
    let gif;
    if (Id >= 200 && Id < 300) {
        gif = storm;
    } else if (Id >= 300 && Id < 400) {
        gif = drizzle;
    } else if (Id >= 500 && Id < 600) {
        gif = rein;
    } else if (Id >= 600 && Id < 700) {
        gif = snow;
    } else if (Id >= 700 && Id < 800) {
        gif = foggy;
    } else if (Id === 800) {
        gif = sun;
    } else if (Id > 800) {
        gif = cloudy;
    } else {
        gif = null;
    }

    return (
        <>
            <div className="container">
                <form className="search__wrapper">
                    <input
                        size="lg"
                        type="text"
                        placeholder="Введите город"
                        className="input"
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <img
                        src={search}
                        alt=""
                        className="search__button"
                        onClick={handleClick}
                    />
                </form>

                <div className="cardC">
                    <div className="crad__wrapper">
                        <img className="crad__gif" src={gif} alt="" />
                        <div className="crad__temp">
                            <div className="crad__temp_number">
                                {weatherTemp > 0 ? '+' + Math.round(weatherTemp) : Math.round(weatherTemp)}
                            </div>
                            <img
                                src={celsius}
                                alt=" °C"
                                className="crad__temp_img"
                            />
                        </div>
                        <p className="crad__city">{cityName}</p>
                        <div className="crad__descr">
                            <div className="card__descr_wrapper">
                                <img src={wind} alt="wind" />
                                <p>{windSpeed + ' м/c'}</p>
                            </div>

                            <div className="card__descr_wrapper">
                                <img src={drop} alt="wind" />
                                <p>{weatherHumidity + ' %'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewCrad;
