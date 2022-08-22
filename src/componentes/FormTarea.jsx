import { TareaFormStyled } from "../styled-componentes/TareaFormStyled";
import { BotonAgregarStyled } from "../styled-componentes/BotonAgregarStyled";
import { BotonEliminarStyled } from "../styled-componentes/BotonEliminarStyled";
import { InputTextStyled } from "../styled-componentes/InputTextStyled";
import { useState } from "react"

const FormTarea = (props)=>{
    const [inputTarea, setInputTarea] = useState("");
    const manejarCambios = (e)=>{
        setInputTarea(e.target.value);
    }

    const agregarTarea = (event)=>{
        event.preventDefault();
        if(inputTarea.trim() !== ""){
            props.nuevaTarea(inputTarea);
        }
        setInputTarea("");
    }
    const eliminarTareas = ()=>{
        props.eliminarTareas()
        setInputTarea("");
    }
    return(
        <>
            <TareaFormStyled action="" className="formTarea" onSubmit={agregarTarea}>
                <label htmlFor="tarea">Ingresar tarea</label>
                <InputTextStyled type="text" placeholder="Nueva tarea" onChange={manejarCambios} value={inputTarea}/>
                <BotonAgregarStyled>Agregar tarea</BotonAgregarStyled>
                <BotonEliminarStyled onClick={eliminarTareas}>Eliminar tareas</BotonEliminarStyled>
            </TareaFormStyled>
        </>
    )
}

export default FormTarea