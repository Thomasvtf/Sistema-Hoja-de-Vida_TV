import { useState } from "react"
function FormularioAcademico({ persona, setpersona, anterior, siguiente }){
    /*const [nformacion, setNformacion] = useState("Bachiller") 
    const [institucion, setInstitucion] = useState("")
    const [titulo, setTitulo] = useState("")
    const [añoG, setAñoG] = useState("")
    const [cursos, setCursos] = useState("")*/
    
    //definir el estado de los cursos
    const [nuevoCurso,setNuevoCurso] = useState("");

    //Agregar curso
    const agregarCurso = () => {

        if (nuevoCurso.trim() === "") { //Metodo .trimm() borra los espacios vacíos al principio y al final de un texto

            alert("Ingrese el nombre del curso: ");
           
            return;

        }
       
        setpersona ({
            ...persona,
            cursos: [ 
                ...persona.cursos,
                nuevoCurso
            ]

        });

            // Limpiar el campo
            setNuevoCurso("");
    };

    //eliminar curso
    const eliminarCurso = (indice) => {

        const cursosActualizados = persona.cursos.filter(
            (_, i) => i !== indice
        );

        setpersona({
            ...persona,
            cursos: cursosActualizados
        })
    };
   

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
                    <select className="input"
                        value={persona.nivel}
                        onChange={(e) => setpersona({...persona, nivel: e.target.value})}>
                        <option value="Bachiller">Bachiller</option>
                        <option value="Tecnico">Tecnico</option>
                        <option value="Tecnologico">Tecnologico</option>
                        <option value="Profesional">Profesional</option>
                        <option value="Especialización">Especialización</option>
                        <option value="Maestría">Maestría</option>
                    </select>
                </div>

                <div className="grupo">
                    <label>Institución Educativa</label>
                    <input type="text" placeholder="Ingrese la institución" className="input"
                        value={persona.institucion}
                        onChange={(e) => setpersona({...persona, institucion: e.target.value})}/>
                </div>

                <div className="grupo">
                    <label>Título Obtenido</label>
                    <input type="text" placeholder="Ingrese el titulo" className="input"
                        value={persona.titulo}
                        onChange={(e) => setpersona({...persona, titulo: e.target.value})}/>
                </div>

                <div className="grupo">
                    <label>Año de Graduación</label>
                    <input type="number" placeholder="2025" className="input"
                        value={persona.anio}
                        onChange={(e) => setpersona({...persona, anio: e.target.value})}/>
                </div>
                
                <div className="grupo">
                    <div>
                        <label>Cursos Realizados</label>
                    </div>
                
                        <div className="curso-agregar">
                            <input className="input2" type="text" placeholder="Ejemplo: React"
                            value={nuevoCurso}
                            onChange={(e) => setNuevoCurso(e.target.value)}/>
                        
                            <button className="boton-curso" type="button" onClick={agregarCurso}>+</button>
                    
                        </div>
                </div>

                {/*lista de cursos*/}

                <div className="lista-cursos">
                    {
                        persona.cursos.map(
                            (curso, indice) => (
                            <div className="grupo">
                                <div 
                                    className="curso"
                                    key = {indice}
                                >
                
                                        {curso}
                                    

                                </div>
                                <div className="boton-eliminar">
                                    <button
                                        type="button" className="eliminar"
                                        onClick={() => eliminarCurso(indice)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                            )
                        )
                    }
                </div>

                <div className="botones">
                    <div className="boton">
                        <button className="button" type="button" onClick={anterior}>Anterior</button>
                    </div>
                    
                    <div className="boton">
                        <button className="button" type="submit">Siguiente</button>
                    </div>
                </div>

            </form>
        </div>
    )    
}

export default FormularioAcademico