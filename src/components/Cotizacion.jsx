import styled from '@emotion/styled'

const Contenedor = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Imagen = styled.img`
  width: 120px;
`

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`

const Precio = styled.p`
  font-size: 26px;
  span {
    font-weight: 700;
  }
`

const Cotizacion = ({cotizacion}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion;
  
  return (
    <Contenedor>
      <Imagen
        src={`https://www.cryptocompare.com/${IMAGEURL}`}
        alt='Imagen Cripto'
      />
      <div>
        <Precio>El Precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}

export default Cotizacion