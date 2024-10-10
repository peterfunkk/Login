import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './styles/global.css'; // Importar estilos globales

function App() {
  return (
    <div className="App">
      <AppRoutes /> {/* Contiene las rutas */}
    </div>
  );
}

export default App;
