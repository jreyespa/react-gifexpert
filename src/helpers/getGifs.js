export const getGifs = async(category) => {

    // Llamamos al endpoint "search". Documentación --> https://developers.giphy.com/docs/api/endpoint/#search
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0VbPDPl5UOVx1xbgTNyPeKa03OiSiOLS&q=${ category }&limit=4`; // Devuelve un JSON con 4 elementos
    const resp = await fetch( url ); // fetch obtiene recursos de forma asíncrona por la red.
    const { data } = await resp.json(); // Guardamos en "data" el json de respuesta



    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
 
    return gifs; // devolvemos 4 elementos dentro de "gifs"
  }
  
 /* Estructura del json:
    data:[
        {   // Imagen1
            type,
            id,
            title,
            ...
            images:
            {
                original:{...},
                downsized:{...},
                downsized_large:{...},
                downsized_medium:
                {
                    url, 
                    ...
                }
                ...,
            }
            ...,         
        },
        {   // Imagen2
            type,
            id,
            title,
            ...
            images:
            {
                original:{...},
                downsized:{...},
                downsized_large:{...},
                downsized_medium:
                {
                    url, 
                    ...
                }
                ...,
            }
            ...,         
        },
        ...
    ]
  */   

  