import './App.css';
import Sesion from './componentes/Sesion.jsx'
import Api from './componentes/Api.jsx'
import Api2 from './componentes/Api2.jsx'
import Api3 from './componentes/Api3.jsx'
import Api4 from './componentes/Api4.jsx'
import ComponenteYas from './componentes/componenteYas.jsx'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Sesion/> 
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
