import { useState } from "react";
import Forecast from "../Forecast";

export default function Weather() {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('UK');
    const [weather, setWeather] = useState(null);
    const [umbrella, setUmbrella] = useState('');
    const [background, setBackground] = useState('');
    const [lon, setLon] = useState();
    const [lat, setLat] = useState();
    const [precipitation, setPrecipitation] = useState();
    const apiKey = import.meta.env.VITE_API_KEY;

    function getWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
        fetch(url).then((response) => response.json())
            .then((data) => {

                let maxTemp = Math.round(data.main.temp);
                let feelsLike = Math.round(data.main.feels_like);
                let precipitation = data.weather[0].id;
                setLon(data.coord.lon);
                setLat(data.coord.lat);

                const currentWeather = {
                    location: `Current weather in ${data.name}`,
                    condition: `${data.weather[0].description}`,
                    temperature: `Temperature: ${maxTemp}`,
                    feels_like: `${feelsLike}`,
                    wind: `Wind speed: ${data.wind.speed} km/h`,
                    icon: data.weather[0].icon
                }
                setWeather(currentWeather);
                if (precipitation <= 622) {
                    setBackground("bg-[url('https://i.pinimg.com/474x/43/02/fb/4302fb8632ea3bd5db5f175c0c1886c0.jpg')] p-1.5 rounded-lg md:text-xl")
                    setUmbrella("You're going to need an umbrella today!")
                }
                else if (precipitation === 800) {
                    setBackground("bg-[url('https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=800')] p-1.5 rounded-lg md:text-xl")
                    setUmbrella("Definitely no umbrella needed today, but you might want some suncream!")
                }
                else {
                    setBackground("bg-[url('https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] p-1.5 rounded-lg md:text-xl")
                    setUmbrella("You probably don't need an umbrella today")
                }
            })
    }
    return (
        <div className="p-2 mx-auto md:mx-none">
            <h1 className="p-2 md:text-2xl">Enter your closest city below to see the current weather conditions</h1>
            <input className="p-1.5 border rounded" type="text" placeholder="Enter closest city name" value={city} onChange={(e) => setCity(e.target.value)}></input>
            <input className="mt-2 md:mt-0 sm:ml-2 p-1.5 border rounded" type="text" placeholder="UK" value={country} onChange={(e) => setCountry(e.target.value)}></input>
            <button className="my-2 sm:ml-2 md:mt-0 p-2 bg-amber-500 font-bold text-white rounded" onClick={getWeather}>See weather</button>
            <div className={`${background}`}>
                <div>
                    {weather && (
                        <div className="p-2">
                            <div className="weather">
                                <h2 className="md:m-0.5 p-0.5 text-white drop-shadow-xl rounded ">{weather.location}</h2>
                                <div className="flex p-1.5 rounded">
                                    <img className="p-1.5" src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={`${weather.condition}`}></img>
                                    <p className="p-1.5 mt-8 text-white drop-shadow-xl rounded">{umbrella}</p>
                                </div>
                                <p className="m-0.5 p-0.5 text-white drop-shadow-xl rounded ">Current conditions: {weather.condition}</p>
                                <p className="m-0.5 p-0.5 text-white drop-shadow-xl rounded ">{weather.temperature}&deg;C and feels like {weather.feels_like}&deg;C</p>
                                <p className="m-0.5 p-0.5 text-white drop-shadow-xl rounded ">{weather.wind}</p>
                            </div>
                        </div>)}
                </div>
            </div>
            <Forecast key={lon} apiKey={apiKey} lon={lon} lat={lat} />
        </div >
    )
}