import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback'
import Login from './Login'
import './App.css';

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const token = 'BQDFHPADhPXXV2acZr0lsYjOrSQFcHPUwSWpfSYJiPp6bn2GqrOpvv56raw1ph0ftsXY-NaoeDf5dr2OlgbxtECnT7r7kDt_LkH54dTQAPe8M8PjY_V7ver6w59rkP4QlrSuXlu0tTly1mDBwVItu00XnPLI-fLpgfpzQObD_1WgpLfEfWrgk7GVq30D61yIZFqQ1dNi2P2LrnYnjHd0wTEgpPIkTw'
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
