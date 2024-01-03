import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  // Sirve para dispara efectos "secundarios". En mi caso, quiero que la petición http sólo se ejecute cuando el componente se carga por primera vez  
  // https://es.react.dev/reference/react/useEffect
  useEffect( () => {
    getImages();   
  }, []);
  
  return {
    images: images,
    isLoading: isLoading
  }
}
