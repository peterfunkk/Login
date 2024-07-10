import React, { useState, useEffect } from 'react';
import './card.css'; // Si quieres agregar estilos personalizados

const Card = ({ duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) {
    return null;
  }

  return (
    <div className="card">
      <h2>Usuario registrado con éxito</h2>
    </div>
  );
};

export default Card;