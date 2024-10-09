import { useState } from 'react';
import axios from 'axios';
import styles from '../Style/page.module.css'; // Asegúrate de usar la ruta correcta

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:4001/login', { user, password }, { withCredentials: true })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error during login:', error);
            });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Usuario"
          className={styles.input}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Iniciar Sesión</button>
      </form>
    </div>
  );
}
