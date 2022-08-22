import { TarjetaStyled } from "../styled-componentes/TarjetaStyled";

const Tarjeta = (props)=>{
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    return(
        <>
            <TarjetaStyled>
                <h3>Fecha: {hoy.toLocaleDateString()}</h3>
                <h3>Tarea: {props.noticia}</h3>
            </TarjetaStyled>   
        </>
    )
}
export default Tarjeta