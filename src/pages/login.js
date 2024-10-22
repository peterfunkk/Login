import { useState } from 'react';
import axios from 'axios';
import styles from '../Style/page.module.css'; // Asegúrate de usar la ruta correcta
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate; // Invoca el hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://loginexpress-alpha.vercel.app/login', { user, password }, { withCredentials: true });
      console.log(response.data);
      navigate('/dashboard'); // Redirige después de iniciar sesión correctamente
    } catch (error) {
      alert(error.response?.data?.error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
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
      <a href="/register">¿No te registraste aun?</a>
    </div>
  );
}

