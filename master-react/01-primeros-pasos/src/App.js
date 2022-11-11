import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  const ficha_medica={
    altura: "168cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a react primeros pasos!!!
        </p>
        
        {/* Cargar mi primer componente */}
        <div className='componentes'>

          <hr/>
          <EventosComponente />
          
          <hr/>
          <TercerComponente
            nombre="Fredy"
            apellidos="Zárate"
            ficha={ficha_medica} 
            />

          <hr/>
          <SegundoComponente/>
          <hr/>
          <MiComponente />

        </div>
        
        
      </header>
    </div>
  );
}

export default App;
