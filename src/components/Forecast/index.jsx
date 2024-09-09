import { useState } from "react";

export default function Forecast({ lon, lat, apiKey }) {

    const [forecast, setForecast] = useState(null);
    const day = new Date().getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [background, setBackground] = useState('');

    function getForecast() {
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        fetch(forecastURL).then((response) => response.json())
            .then((data) => {

                const days = [{
                    day: new Date((data.list[8].dt) * 1000).getDay(),
                    temp: Math.round(data.list[8].main.temp),
                    type: data.list[8].weather[0].main,
                    icon: data.list[8].weather[0].icon,
                    id: data.list[8].weather[0].id
                },
                {
                    day: new Date((data.list[16].dt) * 1000).getDay(),
                    temp: Math.round(data.list[16].main.temp),
                    type: data.list[16].weather[0].main,
                    icon: data.list[16].weather[0].icon,
                    id: data.list[16].weather[0].id
                },
                {
                    day: new Date((data.list[24].dt) * 1000).getDay(),
                    temp: Math.round(data.list[24].main.temp),
                    type: data.list[24].weather[0].main,
                    icon: data.list[24].weather[0].icon,
                    id: data.list[24].weather[0].id
                },
                {
                    day: new Date((data.list[32].dt) * 1000).getDay(),
                    temp: Math.round(data.list[32].main.temp),
                    type: data.list[32].weather[0].main,
                    icon: data.list[32].weather[0].icon,
                    id: data.list[32].weather[0].id
                },
                {
                    day: new Date((data.list[39].dt) * 1000).getDay(),
                    temp: Math.round(data.list[39].main.temp),
                    type: data.list[39].weather[0].main,
                    icon: data.list[39].weather[0].icon,
                    id: data.list[39].weather[0].id
                },
                ]
                setForecast(days);
            })
    }

    return (
        <>
            <button className="mt-2 sm:ml-2 p-2 bg-amber-500 font-bold text-white rounded" onClick={getForecast}>5 day forecast</button>
            <div className="flex flex-col md:flex-row md:gap-2">
                {forecast &&
                    <>
                        <div className="bg-gradient-to-b from-cyan-700 flex m-1 p-1 mx-auto h-fit w-full rounded-lg">
                            <div className="md:flex md:flex-col">
                            <p className="p-1.5 md:p-1 w-20 text-white drop-shadow-xl text-xl md:text-base">{days[forecast[0].day]}</p>
                            <img className="p-1.5 md:p-0 md:object-scale-down md:h-16" src={`https://openweathermap.org/img/wn/${forecast[0].icon}@2x.png`} alt={`${forecast[0].type}`}></img>
                            </div>
                            <div className="flex flex-col p-2 mt-6 md:mt-8 md:mr-2">
                                <p className="text-white drop-shadow-xl text-l md:text-sm">{forecast[0].temp}&deg;C</p>
                                <p className="text-white drop-shadow-xl text-l md:text-sm">{forecast[0].type}</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-cyan-700 flex m-1 p-1 mx-auto h-fit w-full rounded-lg">
                        <div className="md:flex md:flex-col">
                            <p className="p-1.5 md:p-1 w-20 text-white drop-shadow-xl text-xl md:text-base">{days[forecast[1].day]}</p>
                            <img className="p-1.5 md:p-0 md:object-scale-down md:h-16" src={`https://openweathermap.org/img/wn/${forecast[1].icon}@2x.png`} alt={`${forecast[0].type}`}></img>
                            </div>
                            <div className="flex flex-col p-2 mt-6 md:mt-8 md:mr-2">
                                <p className="text-white drop-shadow-xl text-l md:text-sm">{forecast[1].temp}&deg;C</p>
                                <p className="text-white drop-shadow-xl text-l md:text-sm">{forecast[1].type}</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-cyan-700 flex m-1 p-1 mx-auto h-fit w-full rounded-lg">
                            <div className="md:flex md:flex-col">
                            <p className="p-1.5 md:p-1 w-20 text-white drop-shadow-xl text-xl md:text-base">{days[forecast[2].day]}</p>
                            <img className="p-1.5 md:p-0 md:object-scale-down md:h-16" src={`https://openweathermap.org/img/wn/${forecast[2].icon}@2x.png`} alt={`${forecast[0].type}`}></img>
                            </div>
                            <div className="flex flex-col p-2 mt-6 md:mt-8 md:mr-2">
                                <p className="text-white drop-shadow-xl text-l md:text-sm">{forecast[2].temp}&deg;C</p>
                                <p className="text-white drop-shadow-xl text-l md:text-sm">{forecast[2].type}</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-cyan-700 flex m-1 p-1 mx-auto h-fit w-full rounded-lg">
                            <div className="md:flex md:flex-col">
                            <p className="p-1.5 md:p-1 w-20 text-white drop-shadow-xl text-xl md:text-base">{days[forecast[3].day]}</p>
                            <img className="p-1.5 md:p-0 md:object-scale-down md:h-16" src={`https://openweathermap.org/img/wn/${forecast[3].icon}@2x.png`} alt={`${forecast[0].type}`}></img>
                            </div>
                            <div className="flex flex-col p-2 mt-6 md:mt-8 md:mr-2">
                                <p className="text-white drop-shadow-xl text-l md:text-sm">{forecast[3].temp}&deg;C</p>
                                <p className="text-white drop-shadow-xl text-l md:text-sm">{forecast[3].type}</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-cyan-700 flex m-1 p-1 mx-auto h-fit w-full rounded-lg">
                            <div className="md:flex md:flex-col">
                            <p className="p-1.5 md:p-1 w-20 text-white drop-shadow-xl text-xl md:text-base">{days[forecast[4].day]}</p>
                            <img className="p-1.5 md:p-0 md:object-scale-down md:h-16" src={`https://openweathermap.org/img/wn/${forecast[4].icon}@2x.png`} alt={`${forecast[0].type}`}></img>
                            </div>
                            <div className="flex flex-col p-2 mt-6 md:mt-8 md:mr-2">
                                <p className="text-white drop-shadow-xl text-l md:text-sm">{forecast[4].temp}&deg;C</p>
                                <p className="text-white drop-shadow-xl text-l md:text-sm">{forecast[4].type}</p>
                            </div>
                        </div>
                    </>}
            </div>
        </>
    )
}