import { useState  } from 'react';
import styles from '../Style/page.module.css';
import axios from 'axios';

export default function addProducts(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');

    const handleAdd = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/products', { name, description, stock }, { withCredentials: true })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error during login:', error);
            });
    }
    return (
        <div className={styles.formContainer}>
      <h1>Nuevo Producto</h1>
      <form onSubmit={handleAdd} className={styles.form}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          className={styles.input}
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripcion"
          className={styles.input}
          required
        />
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Cantidad"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Cargar</button>
      </form>
    </div>
    )
}