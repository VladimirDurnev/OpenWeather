

import './ViewCrad.css';



import sun from '../../img/sun.gif';
import cloudy from '../../img/cloudy.gif';
import rein from '../../img/rein.gif';
import drizzle from '../../img/drizzle.gif';
import foggy from '../../img/foggy.gif';
import snow from '../../img/snow.gif';
import storm from '../../img/storm.gif';

import celsius from '../../img/celsius.png';
import drop from '../../img/drop.png';
import wind from '../../img/wind.png';

const ViewCrad = ({
    weatherTemp,
    weatherTempFeels,
    weatherСondition,
    windSpeed,
    weatherHumidity,
    cityName,
    // handleChange,
    // handleClick,
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
                <div className="cardC">
                    <div className="crad__wrapper">
                        <img className="crad__gif" src={gif} alt="" />
                        <div className="crad__temp">
                            <div className="crad__temp_number">
                                {weatherTemp}
                            </div>
                            <img
                                src={celsius}
                                alt=" °C"
                                className="crad__temp_img"
                            />
                        </div>
                        <p className="crad__city">{weatherСondition}</p>
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
