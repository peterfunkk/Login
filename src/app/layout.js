import './globals.css'; // Importa estilos globales

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
