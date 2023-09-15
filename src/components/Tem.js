
import React, { useEffect, useState } from 'react'
import './Style.css';
import Weather from './Weather';
const Tem = () => {
    const [searchValue, setSearchValue] = useState("varanasi");
    const [tempInfo, setTempInfo] = useState({})

    const getWeatherInfo = async () =>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=68bc5899007eac7a12a31d4f82eb0062&units=metric`;
        
            const res = await fetch(url);
            const data = await res.json();
            
        
            const {temp, pressure, humidity} = data.main;
            const {main: weathermood} = data.weather[0];
            const {speed} = data.wind;
            const {name:city} = data;
            const {country, sunset} = data.sys;
        
        
        
            const myWeatherInfo ={
                temp, pressure, humidity, weathermood, speed, city, country, sunset
            };
        
        setTempInfo(myWeatherInfo);
        
        } catch (error) {
            console.log(error)
        }
            }
    
    useEffect(()=>{
      
 getWeatherInfo();
 // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
  return (
    <>
    
        
    
    <section className="box">
        <div className="search-box">
            <input type="search" id='search' className='search' placeholder='enter city name' value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} />
            <button type='button' className='searchbutton' onClick={getWeatherInfo}>Search</button>
        </div>
       

      <Weather tempInfo={tempInfo}/>
      </section>

    </>
  )
}

export default Tem