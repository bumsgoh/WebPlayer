import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback'
import Login from './Login'
import './App.css';

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      //const response = await fetch('/auth/token');
      //const json = await response.json();
      const token = 'BQBe1_fJ-HlGTCabz9cKbosRy7B0WDWCvyhqtpTQJOepR5JDcrVwUumaahHfBTcr9h4OP8JoyLzDeRQ_F_qp4h506UeiREoW-1OuPNbagcXtK-vp7sSHGxekDH5VmwW6CzYp2gRWCywN6HrW19Kx_JxhKTcxE0yFA4M6GdPcwuzLcgAMLGYb1jQVuTEieiM1EwRSn2dj6hR02toy4yL1ZMcoiZM3Ewdq'
      setToken(token);
    }

    getToken();

  }, []);

  return (
    <>
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    </>
  );
}


export default App;
