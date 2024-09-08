import { useState } from "react";

export default function Forecast({ lon, lat, apiKey }) {

    const [forecast, setForecast] = useState(null);
    const day = new Date().getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function getForecast() {
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        fetch(forecastURL).then((response) => response.json())
            .then((data) => {

                const days = [{
                    day: new Date((data.list[8].dt) * 1000).getDay(),
                    temp: Math.round(data.list[8].main.temp),
                    type: data.list[8].weather[0].main,
                    icon: data.list[8].weather[0].icon
                },
                {
                    day: new Date((data.list[16].dt) * 1000).getDay(),
                    temp: Math.round(data.list[16].main.temp),
                    type: data.list[16].weather[0].main,
                    icon: data.list[16].weather[0].icon
                },
                {
                    day: new Date((data.list[24].dt) * 1000).getDay(),
                    temp: Math.round(data.list[24].main.temp),
                    type: data.list[24].weather[0].main,
                    icon: data.list[24].weather[0].icon
                },
                {
                    day: new Date((data.list[32].dt) * 1000).getDay(),
                    temp: Math.round(data.list[32].main.temp),
                    type: data.list[32].weather[0].main,
                    icon: data.list[32].weather[0].icon
                },
                {
                    day: new Date((data.list[39].dt) * 1000).getDay(),
                    temp: Math.round(data.list[39].main.temp),
                    type: data.list[39].weather[0].main,
                    icon: data.list[39].weather[0].icon
                },
                ]

                setForecast(days);
            })
    }
    return (
        <>
            <button className="mt-2 sm:ml-2 p-2 bg-amber-500 font-bold text-white rounded" onClick={getForecast}>5 day forecast</button>
            <div className="flex flex-wrap basis-auto w-3/4 mx-auto">
                {forecast &&
                    <>
                        <div className="flex m-1 p-1 w-4/5 mx-auto h-fit bg-indigo-200 rounded-lg">
                            <div className="flex flex-col p-2 w-20">
                                <p className="text-l">{days[forecast[0].day]}</p>
                                <p className="text-l">{forecast[0].temp}&deg;C</p>
                                <p className="text-l">{forecast[0].type}</p>
                            </div>
                            <img className="p-1.5" src={`https://openweathermap.org/img/wn/${forecast[0].icon}@2x.png`} alt={`${forecast[0].type}`}></img>
                        </div>
                        <div className="flex m-1 p-1 w-4/5 mx-auto h-fit bg-indigo-200 rounded-lg">
                            <div className="flex flex-col w-20">
                                <p className="text-l">{days[forecast[1].day]}</p>
                                <p className="text-l">{forecast[1].temp}&deg;C</p>
                                <p className="text-l">{forecast[1].type}</p>
                            </div>
                            <img className="p-1.5" src={`https://openweathermap.org/img/wn/${forecast[1].icon}@2x.png`} alt={`${forecast[0].type}`}></img>
                        </div>
                        <div className="flex m-1 p-1 w-4/5 mx-auto h-fit bg-indigo-200 rounded-lg">
                            <div className="flex flex-col w-20">
                                <p className="text-l">{days[forecast[2].day]}</p>
                                <p className="text-l">{forecast[2].temp}&deg;C</p>
                                <p className="text-l">{forecast[2].type}</p>
                            </div>
                            <img className="p-1.5" src={`https://openweathermap.org/img/wn/${forecast[2].icon}@2x.png`} alt={`${forecast[0].type}`}></img>
                        </div>
                        <div className="flex m-1 p-1 w-4/5 mx-auto h-fit bg-indigo-200 rounded-lg">
                            <div className="flex flex-col w-20">
                                <p className="text-l">{days[forecast[3].day]}</p>
                                <p className="text-l">{forecast[3].temp}&deg;C</p>
                                <p className="text-l">{forecast[3].type}</p>
                            </div>
                            <img className="p-1.5" src={`https://openweathermap.org/img/wn/${forecast[3].icon}@2x.png`} alt={`${forecast[0].type}`}></img>
                        </div>
                        <div className="flex m-1 p-1 w-4/5 mx-auto h-fit bg-indigo-200 rounded-lg">
                            <div className="flex flex-col w-20">
                                <p className="text-l">{days[forecast[4].day]}</p>
                                <p className="text-l">{forecast[4].temp}&deg;C</p>
                                <p className="text-l">{forecast[4].type}</p>
                            </div>
                            <img className="p-1.5" src={`https://openweathermap.org/img/wn/${forecast[4].icon}@2x.png`} alt={`${forecast[0].type}`}></img>
                        </div>
                    </>}
            </div>
        </>
    )
}