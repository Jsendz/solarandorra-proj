

import { Navbar }  from './components/Navbar';
import { Hero } from './components/Hero';
import {Actividades} from './components/Actividades';
import {Expediciones} from './components/Expediciones';
import { Contacte } from './components/Contacte';
import Tres from './components/Tres';




function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tres />
      <Actividades />
      <Expediciones />
      
      <Contacte />
      
     
    </div>
  );
}

export default App;