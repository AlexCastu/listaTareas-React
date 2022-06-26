import './App.css';

import ListadeTareas from './componentes/listadeTareas';

function App() {
  return (
    <div className='App'>
      <h1 className='titulo'>Lista de tareas en React</h1>

      <div className='contenedor-lista-tarea'>
        <h1>Tareas</h1>
        <ListadeTareas />
      </div>
    </div>
  );
}

export default App;
