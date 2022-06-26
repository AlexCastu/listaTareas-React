import React, { useState } from 'react';
import '../styles/formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {
  const [input, setInput] = useState('');
  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(tareaNueva);
  };
  return (
    <form onSubmit={manejarEnvio} className='tarea-formulario'>
      <input
        type='text'
        className='tarea-input'
        placeholder='Escribe una tarrea'
        name='texto'
        onChange={manejarCambio}
      ></input>
      <button onClick={manejarEnvio} className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default Formulario;
