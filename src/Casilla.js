import './Casilla.css';

const Casilla = (props) => {
  return (
    <span fila={props.fila} columna={props.columna} draggable="true" className={props.color === 'negro' ? 'casillanegra casilla' : 'casillablanca casilla'} valor={props.pieza} >{unescape(props.pieza)}</span>
  );
}

export default Casilla