import React, { useEffect, useState } from 'react';
import './App.css';
import './IntroVideo.css';
import IntroVideo from './componentes/IntroVideo';
import Api from './componentes/Api.jsx'
import Api2 from './componentes/Api2.jsx'
import Api3 from './componentes/Api3.jsx'
import Api4 from './componentes/Api4.jsx'


function App() {
  const [videoVisible, setVideoVisible] = useState(true);

  useEffect(() => {
    const video = document.getElementById('introVideo');

    const handleEnded = () => {
      // Ocultar el video una vez que termine de reproducirse
      setVideoVisible(false);
    };

    video.addEventListener('ended', handleEnded);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="App">
      {videoVisible && <IntroVideo />}
      <Api/> 
      <Api2/>
      <Api3/>
      <Api4/> 
    </div>
  );
}

export default App;











