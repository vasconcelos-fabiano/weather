import { useEffect, useState } from 'react'
import './App.css'

const api_url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

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
    console.log(jsonData);
  }

  return (
    <>
      <div className='background-image'>
        <h1 style={titleStyle}>🐭 White Mouse ☀️ Clima & Tempo ⛅</h1>
        {jsonData && (
          <div>
            <p>Temperatura: {jsonData.temperature_2m}</p>
          </div>
        )}
        </div>
    </>
  )
}

export default App
