import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }){
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    let URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "2352377a873f7577d9785202e16daf5b";

    let getWeather = async () => {
        try{
            let response = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let res = {
                city: city,
                temp: jsonResponse.main.temp,
                minTemp: jsonResponse.main.temp_min,
                maxTemp: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description 
            }

            console.log(res);
            return res;
        }catch(err){
            throw err;
        }
    }

    let handleChange = (e) => {
        setCity(e.target.value);
    };

    let handleSubmit = async (e) => {
        try{
            e.preventDefault();
            console.log(city);
            setCity("");

            let newInfo = await getWeather();
            updateInfo(newInfo);
        }catch(err){
            setErr(true);
        }
    };

    return(
        <div className="search-box">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Enter City" variant="outlined" value={city} onChange={handleChange} required />

                <br /><br />  
                
                <Button variant="contained" type='submit'>Search</Button> 

                {err && <p style={{color: "red"}}>No such city found!!</p>}       
            </form>
        </div>
    )
}