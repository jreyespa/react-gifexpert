// Componente que se encarga de pintar lo relativo a una imagen concreta
export const GiftItem = ({id, title, url}) => {
  return (
    <>
        <div className="card">  
            <p key={id}> {title} </p>
            <img src={url} alt={ title }/>
        </div>
    </>
  )
}


