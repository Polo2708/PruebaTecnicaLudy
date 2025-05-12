import { useState } from 'react';
import Configuracion from './components/Configuracion';
import Juego from './components/Juego';
import type { Jugadores } from './types';
import './App.css';

function App() {
  const [jugadores, setJugadores] = useState<Jugadores>({ jugador1: '', jugador2: '' });
  const [fase, setFase] = useState<'configuracion' | 'juego'>('configuracion');

  return (
    <div className="app-container">
      {fase === 'configuracion' ? (
        <Configuracion
          jugadores={jugadores}
          setJugadores={setJugadores}
          iniciarJuego={() => setFase('juego')}
        />
      ) : (
        <Juego jugadores={jugadores} />
      )}
    </div>
  );

}

export default App;
