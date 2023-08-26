import { Link } from "@remix-run/react"
import { formatearFecha } from "~/utils/helpers.js"

export default function Post({post}) {
    const { titulo, url, contenido, imagen, publishedAt} = post
  
    return (
    <article className="post">
        <img src={imagen.data.attributes.formats.small.url} alt={`Imagen de ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className="enlace" to={`/blog/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}
