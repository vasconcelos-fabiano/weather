import { useEffect, useState } from 'react'
import './App.css'

const api_url = "https://api.openweathermap.org/data/3.0/onecall?lat=-3.73&lon=-38.54&exclude=current,minutely,daily,alerts&appid=93ecdd97bfb1bc86ab41c2860a5649a8";

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
    console.log(jsonData.current);
  }

  return (
    <>
      <div className='background-image'>
        <h1 style={titleStyle}>🐭 White Mouse ☀️ Clima & Tempo ⛅</h1>
        {jsonData && (
          <div>
            <p>Cidade<br/><input type="text" id='city' placeholder='Digite aqui a sua cidade'></input></p><br></br>
            <p>Temperatura:  C˚</p>
            <p>Vento:  Km/h</p>
            <p>Sensação Térmica:  C˚</p>
            <p>Umidade do ar:  %</p>
            <p>Temperatura máxima:  </p>
            <p>Temperatura mínima:  </p>
            <p>Pôr-do-sol:  </p>
            <p>Amanhecer:  </p>
          </div>
        )}
        </div>
    </>
  )
}

export default App
