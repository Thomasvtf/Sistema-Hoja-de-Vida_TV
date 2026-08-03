import { useState } from "react"
function FormularioAcademico({ anterior, siguiente }){
    /*const [nformacion, setNformacion] = useState("Bachiller") 
    const [institucion, setInstitucion] = useState("")
    const [titulo, setTitulo] = useState("")
    const [añoG, setAñoG] = useState("")
    const [cursos, setCursos] = useState("")*/
    
    const continuar = (e) => {
        e.preventDefault();
            alert ("Los datos fueron ingresados correctamente");
            if (siguiente){
                siguiente();
            }
    }

    return (
        <div className="formulario">
            <form onSubmit={continuar}>
                <h2>Datos academicos</h2>

                <div className="grupo">
                    <label>Nivel de Formación</label>
                    <select name="Nformacion" id="Nformacion">
                        <option value="">Bachiller</option>
                        <option value="">Tecnico</option>
                        <option value="">Tecnologico</option>
                        <option value="">Profesional</option>
                        <option value="">Especialización</option>
                        <option value="">Maestría</option>
                    </select>
                </div>
                <div className="grupo">
                    <label>Institución Educativa</label>
                    <input type="text" placeholder="Ingrese la institución"/>
                </div>
                <div className="grupo">
                    <label>Título Obtenido</label>
                    <input type="text" placeholder="Ingrese el titulo"/>
                </div>
                <div className="grupo">
                    <label>Año de Graduación</label>
                    <input type="number" placeholder="2025"/>
                </div>
                <div className="grupo">
                    <label>Cursos Realizados</label>
                    <textarea  placeholder="Escriba los cursos realizados."></textarea>
                </div>
                <div className="boton">
                    <button  type="button" onClick={anterior}>Anterior</button>
                </div>
                <div className="boton">
                    <button  type="submit">Siguiente</button>
                </div>
            </form>
        </div>
    )    
}

export default FormularioAcademico