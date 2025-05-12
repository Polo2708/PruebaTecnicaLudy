import { useState } from 'react';
import type { Jugadores } from '../types';
import './Configuracion.css';

interface Props {
    jugadores: Jugadores;
    setJugadores: React.Dispatch<React.SetStateAction<Jugadores>>;
    iniciarJuego: () => void;
}

function Configuracion({ setJugadores, iniciarJuego }: Props) {
    const [nombre1, setNombre1] = useState('');
    const [nombre2, setNombre2] = useState('');

    const manejarInicio = () => {
        if (nombre1 && nombre2) {
            setJugadores({ jugador1: nombre1, jugador2: nombre2 });
            iniciarJuego();
        } else {
            alert('Por favor ingresa ambos nombres');
        }
    };

    return (
        <div className="config-container">
            <h2 className="config-title">🎾 Configuración del Juego 🎾</h2>
            <div className="formulario">
                <input
                    className="input-jugador"
                    placeholder="Nombre del Jugador 1"
                    value={nombre1}
                    onChange={e => setNombre1(e.target.value)}
                />
                <input
                    className="input-jugador"
                    placeholder="Nombre del Jugador 2"
                    value={nombre2}
                    onChange={e => setNombre2(e.target.value)}
                />
                <button className="btn-iniciar" onClick={manejarInicio}>Iniciar juego</button>
            </div>
        </div>
    );

}

export default Configuracion;
