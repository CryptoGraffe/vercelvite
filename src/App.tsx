import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [apiResponse,setApiResponse] = useState<string|undefined>();

    useEffect(() => {
        fetch("/api/function")
            .then((res) => res.text())
            .then((res) => setApiResponse(res))
        .catch((err) => setApiResponse(JSON.stringify(err)));
    }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <div>API Response:</div>
          <div>{!apiResponse && 'Loading...'}</div>
        <div>{apiResponse &&  apiResponse}</div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
