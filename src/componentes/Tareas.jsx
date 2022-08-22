import { useState } from "react";
import FormTarea from "./FormTarea";
import VisorTareas from "./VisorTareas";

const Tareas = ()=>{
    const [tareas, setTareas] = useState([]);
    const nuevaTarea = (tarea)=>{
      setTareas(
        [tarea, ...tareas]
      )
    }

    const eliminarTareas = ()=>{
      setTareas([])
    }

    return(
        <>   
            <FormTarea
                nuevaTarea = {nuevaTarea}
                eliminarTareas = {eliminarTareas}
            />
            <VisorTareas 
                tareas={tareas}
            />
        </>
     
    )
}

export default Tareas
