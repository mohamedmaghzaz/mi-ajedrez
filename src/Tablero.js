import { useEffect, useState } from "react";
import Casilla from "./Casilla";
import './Tablero.css';


const Tablero = () => {

const [tablero, setTablero]= useState(
    [
            ['\u265C', '\u265E', '\u265D','\u265A', '\u265A', '\u265D', '\u265E', '\u265C'],
            ['\u265F', '\u265F', '\u265F','\u265F', '\u265F', '\u265F', '\u265F', '\u265F'],
            ['', '', '','', '', '', '', ''],
            ['', '', '','', '', '', '', ''],
            ['', '', '','', '', '', '', ''],
            ['', '', '','', '', '', '', ''],
            ['\u2659', '\u2659', '\u2659','\u2659', '\u2659', '\u2659', '\u2659', '\u2659'],
            ['\u2656', '\u2658', '\u2657','\u2655', '\u2654', '\u2657', '\u2658', '\u2656']
    ]
)
useEffect(()=>{

    const drag=(e)=>{
        e.dataTransfer.setData("fila", e.target.attributes.fila.value);
        e.dataTransfer.setData("columna", e.target.attributes.columna.value);
        e.dataTransfer.setData("valor", e.target.attributes.valor.value);
    }
    const permitirDrop=(e)=>{
        e.preventDefault();
    }
    const drop=(e)=>{
        e.preventDefault();
        const fila= parseInt(e.dataTransfer.getData('fila'));
        const columna= parseInt(e.dataTransfer.getData("columna"));
        const valor= e.dataTransfer.getData('valor');
        let nuevo= [...tablero];
        for(let f=0; f<8; f++){
            for(let c=0; c<8; c++){
                if(parseInt(e.target.attributes.fila.value) === f && parseInt(e.target.attributes.columna.value) === c){
                    nuevo[f][c] = valor;
                    if(f!== fila || c!== columna)
                    nuevo[fila][columna]= '';
                }
            }
        }
        setTablero(nuevo);
    }
    const casillas= document.querySelectorAll('.casilla');
    for(let casilla of casillas){
        casilla.addEventListener('dragstart', drag);
        casilla.addEventListener('dragover', permitirDrop);
        casilla.addEventListener('drop', drop);
    }
}, [tablero])

  return (
    <div className="tablero">
        {tablero.map((fila, indicef)=>{
            return fila.map((casilla, indicec)=>{
                return (<Casilla valor={casilla} fila={indicef} columna={indicec} key={indicef + indicec} pieza={casilla} color={(indicef + indicec) % 2 === 0 ? 'blanco' : 'negro'} />)

            })
        })}
    </div>
  )
}

export default Tablero