import { useState } from 'react'; //Estado
import type { Jugadores } from '../types'; //Jugadores forma de objeto
import './Juego.css';

//Recibe propiedades de los jugadores
interface Props {
    jugadores: Jugadores;
}

//Recibe los jugadores desde props
function Juego({ jugadores }: Props) {
    //Llevar conteo de los puntos para cada jugador
    const [puntos, setPuntos] = useState<[number, number]>([0, 0]);

    //Cambia cuando hay un ganador
    const [ganador, setGanador] = useState<string>('');

    const traduccionPuntos = ['0', '15', '30', '40', 'Ventaja', 'Ganador'];

    const darPunto = (index: 0 | 1) => {
        const otro = index === 0 ? 1 : 0;

        //Hace copia de los puntos de cada jugador
        let nuevos = [...puntos] as [number, number];

        if (ganador) return;

        if (nuevos[index] >= 3 && nuevos[otro] < 3) {
            nuevos[index] = 5;
            setGanador(jugadores[`jugador${index + 1}` as keyof Jugadores]);
        } else if (nuevos[index] === 3 && nuevos[otro] === 3) {
            nuevos[index]++;
        } else if (nuevos[index] === 4 && nuevos[otro] === 3) {
            nuevos[index] = 5;
            setGanador(jugadores[`jugador${index + 1}` as keyof Jugadores]);
        } else if (nuevos[index] === 4 && nuevos[otro] === 4) {
            nuevos = [3, 3];
        } else {
            nuevos[index]++;
        }

        setPuntos(nuevos);
    };

    return (
        <div className="tablero">
            <h2 className="titulo">🎾 Juego en progreso 🎾</h2>
            <div className="marcador">
                <div className="jugador">
                    <h3>{jugadores.jugador1}</h3>
                    <div className="puntos">{traduccionPuntos[puntos[0]]}</div>
                </div>
                <div className="jugador">
                    <h3>{jugadores.jugador2}</h3>
                    <div className="puntos">{traduccionPuntos[puntos[1]]}</div>
                </div>
            </div>

            {!ganador && (
                <div className="botones">
                    <button onClick={() => darPunto(0)}>Punto para {jugadores.jugador1}</button>
                    <button onClick={() => darPunto(1)}>Punto para {jugadores.jugador2}</button>
                </div>
            )}

            {ganador && <h2 className="ganador">🏆 ¡Ganador: {ganador}! 🏆</h2>}
        </div>
    );
}

export default Juego;
