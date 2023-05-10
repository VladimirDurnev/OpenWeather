import { Component } from 'react';

import ViewCrad from '../ViewCrad/ViewCrad';

import './CardList.css';

import sun from '../../img/sun.gif';
import cloudy from '../../img/cloudy.gif';
import rein from '../../img/rein.gif';
import drizzle from '../../img/drizzle.gif';
import foggy from '../../img/foggy.gif';
import snow from '../../img/snow.gif';
import storm from '../../img/storm.gif';

class СardList extends Component {
    render() {
        
        if (Object.keys(this.props.weatherToWeek).length > 0) {
            const weatherToWeek = this.props.weatherToWeek;
            
            return weatherToWeek.map((item) => {
 
                let Id = Number(item.weatherId)
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
                        <div className="weatherToWeek">
                            <h4 className="weatherToWeek__date">{item.dt_txt}</h4>
                            <img src={gif} alt="" className='weatherToWeek__img'/>
                            <h5 className="weatherToWeek__temp">{item.weatherTemp}</h5>
                            <h6 className="weatherToWeek__condition">{item.weatherСondition}</h6>
                        </div>
                    </>
                );
            });
        }
    }
}

export default СardList;
