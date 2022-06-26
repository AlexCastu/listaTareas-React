import React from 'react';
import '../styles/tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ texto, completada, id, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? 'tarea-contenedor tarea-completada' : 'tarea-contenedor'
      }
    >
      <div
        className='tarea-texto'
        onClick={() => {
          completarTarea(id);
        }}
      >
        {texto}
      </div>
      <div
        onClick={() => {
          eliminarTarea(id);
        }}
      >
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );
}

export default Tarea;
