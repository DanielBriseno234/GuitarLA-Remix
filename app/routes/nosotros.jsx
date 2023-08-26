import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";

export function meta() {
  return [
    {
      description: "Venta de guitarras",
    },
    { title: "GuitarLA - Sobre Nosotros" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h1 className="heading">Nosotros</h1>

      <div className="contenido">
        <img src={imagen} alt="Imagen de nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            risus dolor, hendrerit id ultrices vel, ultricies sit amet quam.
            Nunc arcu orci, ultricies in accumsan id, condimentum sit amet ex.
            Nunc arcu orci, ultricies in accumsan id, condimentum sit amet ex.
            risus dolor, hendrerit id ultrices vel, ultricies sit amet quam.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            risus dolor, hendrerit id ultrices vel, ultricies sit amet quam.
            Nunc arcu orci, ultricies in accumsan id, condimentum sit amet ex.
            Nunc arcu orci, ultricies in accumsan id, condimentum sit amet ex.
            risus dolor, hendrerit id ultrices vel, ultricies sit amet quam.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
