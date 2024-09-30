
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Experiences} from './pages/experiences';
import Projets from './pages/projets';
import Accueil from './pages/accueil';


export default function App() {

  

  return (
    <div className="App" >
      <Accueil/>
    </div>
  );
}
