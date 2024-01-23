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

    const [apiResponseWithJs,setApiResponseWithJs] = useState<string|undefined>();

    useEffect(() => {
        fetch("/api/function_js")
            .then((res) => res.text())
            .then((res) => setApiResponseWithJs(res))
            .catch((err) => setApiResponseWithJs(JSON.stringify(err)));
    }, []);
  return (
    <>

      <div className="card">
          <div><strong>API Response w/ no file extension import:</strong></div>
          <div>{!apiResponse && 'Loading...'}</div>
        <div>{apiResponse &&  apiResponse}</div>
      </div>
        <div className="card">
            <div><strong>API Response w/ .js import:</strong></div>
            <div>{!apiResponseWithJs && 'Loading...'}</div>
            <div>{apiResponseWithJs &&  apiResponseWithJs}</div>
        </div>
    </>
  )
}

export default App
