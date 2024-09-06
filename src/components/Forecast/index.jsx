import { useState } from "react";

export default function Forecast({ lon, lat }) {


    function getForecast() {
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=443ee654534541671242b4a469480a48`
        // const [image, setImage] = useState('');
        // const [description, setDescription] = useState('');

        fetch(forecastURL).then((response) => response.json())
            .then((data) => {
                console.log(data.list[2].weather)
            })
    }
    return (
        <>
            <button className="mt-2 sm:ml-2 md:mt-0 p-2 bg-amber-500 font-bold text-white rounded" onClick={getForecast}>See 5 day forecast</button>
            {/* <img className="p-1.5" src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={`${weather.condition}`}></img> */}
        </>
    )
}