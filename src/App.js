import { useState } from "react";
import Tablero from "./Tablero";


function App() {

const [datos, setDatos]= useState({
  nombre: '',
  edad: '',
  estudios: false
})
const [numero, setNumero]= useState('');
const [texto, setTexto]= useState('');
const [dia, setDia]= useState('Lunes');
const [dias, setDias]= useState(['Lunes', 'Miércoles']);
const [estudios, setEstudios]= useState('primario');

const cambioNombre=(e)=>{
  setDatos((valores)=>({
    ...valores,
    nombre: e.target.value
  }))
}
const cambioEdad=(e)=>{
  setDatos((valores)=> ({
    ...valores,
    edad: e.target.value
  }))
}
const cambioEstudio=(e)=>{
  setDatos((valores)=>({
    ...valores,
    estudios: !datos.estudios
  }))
}
const procesar=(e)=>{
e.preventDefault();
alert('Dato cargado '+ datos.nombre + ' ' +datos.edad+ ' '+datos.estudios);
}

const cambioNumero=(e)=>{
  const entrada= e.target.value;
  let cant= 0;
  for(let x=0; x<entrada.length; x++)
if(entrada[x] === '0' || entrada[x] === '1')
cant++;
if(cant === entrada.length)
setNumero(entrada);
}
const cambioTexto=(e)=>{
setTexto(e.target.value);
}
const cambioDia=(e)=>{
  setDia(e.target.value);
}
const cambioDias=(e)=>{
  const opciones= e.target.options;
  const seleccionados= [];
  for(let i=0; i<opciones.length; i++){
    if(opciones[i].selected){
      seleccionados.push(opciones[i].value);
    }
  }
  setDias(seleccionados);
}
const cambioEstudios=(e)=>{
  setEstudios(e.target.value)
}

  return (
    <div>

      <h1>Tablero Mohaweb con Drag and Drop 😀</h1>
      <Tablero />

      <form onSubmit={procesar}>
        <p>Ingrese nombre: <input type="text" value={datos.nombre} onChange={cambioNombre} /></p>
        <p>Ingrese edad: <input type="number" value={datos.edad} onChange={cambioEdad} /></p>
        <p>Estudios: <input type="checkbox" value={datos.estudios} onChange={cambioEstudio} /></p>
        <p><input type="submit" /></p>
      </form>

      <hr/>
      <h3>Datos ingresados</h3>
      <p>Nombre: {datos.nombre}</p>
      <p>Edad: {datos.edad}</p>
      <p>Estudios: {datos.estudios ? 'con estudios' : 'sin estudios'}</p>

      <hr/>
        <p>Ingrese un número: <input type="text" value={numero} onChange={cambioNumero} /></p>

        <hr/>
        <p><textarea value={texto} onChange={cambioTexto} cols="100" rows="5"></textarea></p>
        <p>Cantidad de caracteres ingresados: {texto.length}</p>

        <hr/>
        <p>
          <select value={dia} onChange={cambioDia}>
            <option>Lunes</option>
            <option>Martes</option>
            <option>Miércoles</option>
            <option>Jueves</option>
            <option>Viernes</option>
            <option>Sábado</option>
            <option>Domingo</option>
          </select>
          </p>
          <p>Día seleccionado: {dia}</p>
          <hr/>
          <p>
            <select multiple value={dias} onChange={cambioDias}>
      <option>Lunes</option>
      <option>Martes</option>
      <option>Miércoles</option>
      <option>Jueves</option>
      <option>Viernes</option>
      <option>Sábado</option>
      <option>Domingo</option>
            </select>
          </p>
          <p>Días seleccionados: {dias.map((dia)=>{
            return (<p>{dia}</p>)
          })}</p>
          <hr/>
          <p><input type="radio" value="primario" checked={estudios === 'primario'}
          onChange={cambioEstudios} />Primario</p>
          <p><input type="radio" value="secundario" checked={estudios === 'secundario'}
          onChange={cambioEstudios} />SEcundario</p>
          <p><input type="radio" value="universitario" checked={estudios === 'universitario'}
          onChange={cambioEstudios} />Universitario</p>
          <p>EStudio seleccionado: {estudios}</p>
    </div>
  );
}

export default App;
