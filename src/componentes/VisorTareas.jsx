import { ContenedorFlexStyled } from "../styled-componentes/ContenedorFlexStyled";
import Tarjeta from "./Tarjeta";

const VisorTareas = (props)=>{
    const tareas = props.tareas
    return(
        <>
            <h2>Tareas: </h2>
            <ContenedorFlexStyled>
                {tareas.length!==0?tareas.map(t=><Tarjeta noticia={t} key={t} />):<h2>No hay tareas</h2>}
            </ContenedorFlexStyled>
        </>
    )
}
export default VisorTareas
