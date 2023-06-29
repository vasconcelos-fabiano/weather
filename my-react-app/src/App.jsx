import { useEffect, useState } from 'react'
import './App.css'

// const api_url = "https://api.openweathermap.org/data/3.0/onecall?lat=-3.73&lon=-38.54&exclude=current,minutely,daily,alerts&appid=93ecdd97bfb1bc86ab41c2860a5649a8";
const api_url = "https://api.openweathermap.org/data/2.5/weather?lat=-3.73&lon=-38.54&units=metric&lang=en&appid=93ecdd97bfb1bc86ab41c2860a5649a8"

function App() {
  const titleStyle = {
    fontFamily: 'Arial, sans-serif',
  };

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    logJSONData();
  }, []);

  const logJSONData = async () => {
    const response = await fetch(api_url);
    const jsonData = await response.json();
    setJsonData(jsonData);
    console.log(jsonData.main.temp);
  }

  return (
    <>
      <div className='background-image'>
        <h1 style={titleStyle}>🐭 White Mouse ☀️ Clima & Tempo ⛅</h1>
        {jsonData && (
          <div>
            <p>Cidade<br/><input type="text" id='city' placeholder='Digite aqui a sua cidade'></input></p><br></br>
            <p>Temperatura: {jsonData.main.temp} C˚</p>
            <p>Vento: {jsonData.wind.speed} Km/h</p>
            <p>Sensação Térmica: {jsonData.main.feels_like} C˚</p>
            <p>Umidade do ar: {jsonData.main.humidity} %</p>
            <p>Temperatura máxima: {jsonData.main.temp_max} C˚</p>
            <p>Temperatura mínima: {jsonData.main.temp_min} C˚</p>
            <p>Pôr-do-sol: {jsonData.sys.sunset} </p>
            <p>Amanhecer: {jsonData.sys.sunrise} </p>
          </div>
        )}
        </div>
    </>
  )
}

export default App
