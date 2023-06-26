import { useEffect, useState } from 'react'
import './App.css'

const api_url = "https://api.open-meteo.com/v1/forecast?latitude=-3.72&longitude=-38.54&current_weather=true";

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
  }

  return (
    <>
      <div className='background-image'>
        <h1 style={titleStyle}>🐭 White Mouse ☀️ Clima & Tempo ⛅</h1>
        {jsonData && (
          <div>
            <p>Cidade<br/><input type="text" id='city' placeholder='Digite aqui a sua cidade'></input></p><br></br>
            <p>Temperatura: {jsonData.current_weather.temperature} C˚</p>
            <p>Vento: {jsonData.current_weather.windspeed} Km/h</p>
            <p>Sensação Térmica: </p>
            <p>Umidade do ar: </p>
            <p>Temperatura máxima: </p>
            <p>Temperatura mínima: </p>
            <p>Pôr-do-sol: </p>
            <p>Amanhecer: </p>
          </div>
        )}
        </div>
    </>
  )
}

export default App
