import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicoComponent } from './components/EjercicoComponent';

function App() {

  const fecha = new Date();
  const yearActual = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <h1>El estado en React - Hook useState</h1>
        
        <MiPrimerEstado />

        <EjercicoComponent year={yearActual} />
      
      </header>
    </div>
  );
}

export default App;
