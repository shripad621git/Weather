import React, { useEffect, useState } from "react";
import "./Header.css";
import humidity from "./weather_icons/humidity.svg";
import lightning from "./weather_icons/lightning.svg";
import moon from "./weather_icons/moon.svg";
import rain from "./weather_icons/rain.svg";
import snow_flake from "./weather_icons/snow-flake.svg";
import storm from "./weather_icons/storm.svg";
import wind from "./weather_icons/wind.svg";
import mist from "./weather_icons/mist.svg";
import sun from "./weather_icons/sun.svg";
import clouds from "./weather_icons/clouds.svg";
import clearSky from "./weather_icons/rainbow.svg";
const Header = () => {
    const [n, updateName] = useState("");
    const [cityname, updateCityName] = useState("");
    const [response, updateRes] = useState(null);
    const API_key = "baa16f8c3001a5bc6cbfb77e74677732";
    useEffect(()=>{
        const link = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key }`;
        const getWeather = async() => {
            const res = await fetch(link);
            const resJson = await res.json();
            updateRes(resJson);
            console.log(resJson);
        }
        getWeather();
    },[cityname]);
    const convertUnix=(prop)=>{
        const hours = new Date(prop*1000).getHours();
        const minutes =  new Date(prop*1000).getMinutes();
        const seconds =  new Date(prop*1000).getSeconds();
        const str=hours.toString()+":"+minutes.toString()+":"+seconds.toString()+" IST";
        return str;
    }
     const weather_icon=(prop,prop2)=>{
         if(prop==="Smoke"||prop==="Haze")
         return <img src={mist} alt="smoke"/>;  
        else if(prop==="Clouds")
         return  <img src={clouds} alt="clouds"/>;
        else if(prop==="Rain")
         return <img src={rain} alt="rain"/>;
        else if(prop==="Clear")
         return <img src={clearSky} alt="clear"/>;
        else if(prop==="Storm")
         return <img src={storm} alt="Storm"/>;
        else if(prop==="Lightning")
         return <img src={lightning} alt="Lightning"/>;
        else if(prop==="Humid")
         return <img src={humidity} alt="humid"/>;
         else 
         return <img src={wind} alt=""/>;
         
     }
    
    return(
        <React.Fragment>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-10 mx-auto" >
                   <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item px-3">
          
           <input 
                placeholder="Enter city name"
                type="text"
                onChange = {(event)=>{
                    updateName(event.target.value);
                }}
            /> 
        </li>
        <li className="nav-item px-3">
        <button className="btn btn-primary" onClick = {()=>{
                updateCityName(n);
            }}>Search</button>  
       </li>  

          </ul>
       </div>
      </div>
</nav>
<div className="container-fluid ">

                            
{!response ?(<h1>No</h1>):(<>
            <div className="data">
                <div className="row py-1">
                <h1>{response.name}</h1>
         
            
            
                </div>
             
                <div className="row py-1">
                <h1>{response.weather[0].main}</h1>
                <h1 className="py-2"><span>{weather_icon(response.weather[0].main)}</span></h1> 

                </div>
                <div className="row py-3">
                   <div className="col">
                   <h1 className="py-2">Temp: {(response.main.temp-273.15).toFixed(2)}&deg;C</h1>
                   
                   <h1 className="py-2">Feels Like: {(response.main.feels_like-273.15).toFixed(2)}&deg;C</h1>
                    <h1 className="py-2">Pressure: {response.main.pressure/100} Pa</h1>
                    <h1 className="py-2">Humidity: {response.main.humidity}%</h1>
                   </div>
                   <div className="col">
                   <h1 className="py-2">Visibility: {response.visibility/1000}Km</h1>
                   <h1 className="py-2">Wind Speed: {response.wind.speed}m/sec</h1>
                   <h1 className="py-2">Sunrise: {convertUnix(response.sys.sunrise)}</h1>
                   <h1 className="py-2">Sunset: {convertUnix(response.sys.sunset)}</h1>

                   </div>
           
                </div>
           
            </div>
            </>)
            }
 
            
</div>


        
                   </div>
               </div>
           </div>
            
        </React.Fragment>
    );
}

export default Header;