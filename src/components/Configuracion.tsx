import { useState } from 'react'; //Estado del usuario
import type { Jugadores } from '../types'; //Tipo, define como debe ser el objeto de jugadores
import './Configuracion.css'; //Estilos

//Definicion de las propiedad que recibe el componente
interface Props {
    jugadores: Jugadores; //Estado de los jugadores
    setJugadores: React.Dispatch<React.SetStateAction<Jugadores>>; //Funcion para actualizar el estado de los jugadores
    iniciarJuego: () => void; //Se ejecuta cuando se inicia el juego
}

//Funcion de configuracion
function Configuracion({ setJugadores, iniciarJuego }: Props) { //recibe las propiedades

    //Estados locales
    const [nombre1, setNombre1] = useState('');
    const [nombre2, setNombre2] = useState('');

    //Manejar el inicio
    const manejarInicio = () => {
        if (nombre1 && nombre2) {
            setJugadores({ jugador1: nombre1, jugador2: nombre2 });
            //Iniciar juego
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
