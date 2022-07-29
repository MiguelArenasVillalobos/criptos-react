import '../styles/Spinner.css'
import styled from '@emotion/styled'

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`

const Spinner = () => {
  return (
    <Contenedor>
      <div className="hollow-dots-spinner">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </Contenedor>
  )
}

export default Spinner