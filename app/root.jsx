import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  isRouteErrorResponse,
  useRouteError,
  Link
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import { useState, useEffect } from "react";

export const meta = () => {
  return [
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1",
    },
    { title: "GuitarLA - Remix" },
  ];
};

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {

  const carritoLS =  typeof window !== "undefined" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null ;
  
  const [carrito, setCarrito] = useState(carritoLS);

  useEffect( () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito])

  function agregarCarrito(guitarra) {
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
      
      const carritoActualizado = carrito.map( guitarraState => {
        if(guitarraState.id === guitarra.id ){
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      } );
      setCarrito(carritoActualizado);
    }else{
      setCarrito([...carrito, guitarra]);
    }
  }

  function actualizarCantidad(guitarra){
    const carritoActualizado = carrito.map(guitarraState =>{
      if(guitarraState.id === guitarra.id){
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState;
    })
    setCarrito(carritoActualizado);
  }

  function eliminarGuitarra(id){
    const carritoActualizado = carrito.filter( guitarraState => guitarraState.id !== id  );
    setCarrito(carritoActualizado);
  }

  return (
    <Document>
      <Outlet 
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
          <p className="error">{error.status} {error.statusText}</p>
          <Link to="/" className="error-enlace">Tal vez quieras ir a la página principal</Link>
      </Document >
    );
  } else if (error instanceof Error) {
    return (
      <Document>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </Document>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}