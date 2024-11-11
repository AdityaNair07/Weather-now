import { useState, useEffect } from "react";
import { getData } from "./service/api";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();

  const handleGetData = async (e) => {
    e.preventDefault();
    await getData(city).then((data) => {
      console.log(data.current);
      setWeatherData(data?.current);
    });
  };

  useEffect(() => {}, [weatherData]);

  return (
    <div className="bg-[url('https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] w-screen h-screen bg-no-repeat bg-cover object-cover bg-center">
      <div className="container lg:px-10 px-0 mx-auto py-20">
        <div className="w-1/2 p-10 border-1 border-slate-800 rounded-md shadow-md mx-auto backdrop-blur-md bg-slate-50">
          <form className="flex flex-col gap-4 mb-10" onSubmit={handleGetData}>
            <input
              className="border border-slate-600 rounded-md p-2"
              type="text"
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter the city name..."
            />
            <button className="border border-black rounded-md bg-slate-300 p-2 w-32 mx-auto">
              Search
            </button>
          </form>

          {weatherData ? (
            <div className="flex flex-wrap gap-5 justify-center ">
              <div className="shadow-md p-2 rounded-md flex flex-col font-semibold text-lg items-center justify-center gap-2">
                <span className="text-lg font-bold">Condition</span>
                {weatherData.condition.text}
              </div>
              <div className="shadow-md p-2 rounded-md flex flex-col font-semibold text-lg items-center justify-center gap-2">
                <span className="text-lg font-bold">Temperature</span>
                {weatherData.temp_c} °C
              </div>
              <div className="shadow-md p-2 rounded-md flex flex-col font-semibold text-lg items-center justify-center gap-2">
                <span className="text-lg font-bold">Wind Speed</span>
                {weatherData.wind_kph} kph
              </div>
              <div className="shadow-md p-2 rounded-md flex flex-col font-semibold text-lg items-center justify-center gap-2">
                <span className="text-lg font-bold">Updated At</span>
                {weatherData.last_updated}
              </div>
            </div>
          ) : (
            <p className="text-2xl text-center font-semibold">No data</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
