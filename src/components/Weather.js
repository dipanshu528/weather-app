import React from 'react'
import './Style.css';

const Weather = ({tempInfo}) => {
     const {temp, pressure, humidity, weathermood, speed, city, country, sunset} = tempInfo;


     let sec = sunset;
     let date = new Date(sec*1000);
     let timestr  = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="container">

        <div className="middle">
             <div className="middle1">
                <span>{temp} &deg; </span>
                <span className='cel'>C</span>
             </div>
             <div className="middle2">
                <div className="condition">{weathermood}</div>
                    <div className="place">{city}, {country}</div>
             </div>
             <div className="middle3">{new Date().toLocaleString()}</div>
        </div>

        <div className="bottom">
            <div className="info">
                <div className="info1">
                <i className="fa-solid fa-cloud-sun"></i></div>
                <div className="info2">
                    {timestr} <br/> sunset
                </div>
            </div>
            
            <div className="info">
                <div className="info1">
                <i className="fa-solid fa-droplet"></i></div>
                <div className="info2">
                    {humidity}<br/> Humidity
                </div>
            </div>

            <div className="info">
                <div className="info1">
                <i className="fa-solid fa-cloud-showers-heavy"></i></div>
                <div className="info2">
                    {pressure} <br/> Pressure
                </div>
            </div>

            <div className="info">
                <div className="info1">
                <i className="fa-solid fa-wind"></i></div>
                <div className="info2">
                    {speed}<br/> Wind
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Weather