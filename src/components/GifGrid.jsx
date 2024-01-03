// Componente que se encarga de mostrar todo lo relativo a una categoria
// rafc + tab para crear esqueleto.

import { GiftItem } from "./GiftItem";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  /* Sustituimos el código comentado por nuestro custom hook "useFetchGifs*/
  const { images, isLoading } = useFetchGifs( category );
  console.log({images, isLoading});

  return (
    <>
        <h3>{ category }</h3>

        {
          // Forma corta de realizar un if. Si "isLoading" es false, ni siquiera se comprueba la segunda parte. Si es true, sí.
          isLoading && (<h2>Cargando...</h2>)
        }

        <div>
          {
            // image.id y image.title, pero lo he desestructurado. 
            images.map( ({id, title, url }) => (
              <GiftItem
                key={ id }
                title = { title }
                url = { url }            
              />
            ))
          }
          
        </div>
    </>
  )
}
