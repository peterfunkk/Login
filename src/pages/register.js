import { useState } from 'react';
import axios from 'axios';
import styles from '../Style/page.module.css';
import Card from '../components/card' // Asegúrate de usar la ruta correcta

export default function Register() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4001/register', {
        user,
        email,
        password,
      });
      alert(res.data.mensaje || 'Usuario registrado con éxito');
      setIsRegistered(true);
      setTimeout(() => setIsRegistered(false), 3000);
    } catch (error) {
      alert(error.response?.data?.error)
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Register</h1>
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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo"
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
        <button type="submit" className={styles.button}>Registrarse</button>
      </form>
      {isRegistered && <Card duration={3000}/>}
      <a href="/login">¿Ya tenes cuenta?</a>
    </div>
  );
}
