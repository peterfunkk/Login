import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './styles/global.css';// Importar estilos globales
import Root from '../nextjs-dashboard/src/routes/root'

function App() {
  return (
    <div className="App">
      <Root /> {/* Contiene las rutas */}
    </div>
  );
}

export default App;
