import { useState } from "react"

function FormularioAcademico({ persona, setpersona, anterior, siguiente }){
    
    const [error, setError] = useState({});
    const [nuevoCurso, setNuevoCurso] = useState("");

    const validarForm = () => {
        const errorNuevo = {};
        const anioActual = new Date().getFullYear();

        if (!persona.institucion.trim()) {
            errorNuevo.institucion = "La institución educativa es obligatoria.";
        }

        if (!persona.titulo.trim()) {
            errorNuevo.titulo = "El título obtenido es obligatorio.";
        }

        if (!persona.anio) {
            errorNuevo.anio = "El año de graduación es obligatorio.";
        } else if (Number(persona.anio) < 1950 || Number(persona.anio) > anioActual) {
            errorNuevo.anio = `Ingresa un año válido entre 1950 y ${anioActual}.`;
        }

        if (!persona.cursos || persona.cursos.length === 0) {
            errorNuevo.cursos = "Debes agregar al menos un curso realizado.";
        }

        setError(errorNuevo);
        return Object.keys(errorNuevo).length === 0;
    };

    // Agregar curso
    const agregarCurso = () => {
        if (nuevoCurso.trim() === "") {
            alert("Ingrese el nombre del curso.");
            return;
        }
       
        setpersona ({
            ...persona,
            cursos: [...persona.cursos, nuevoCurso]
        });
        setNuevoCurso("");

        if (error.cursos) {
            setError({ ...error, cursos: "" });
        }
    };

    // Eliminar curso
    const eliminarCurso = (indice) => {
        const cursosActualizados = persona.cursos.filter((_, i) => i !== indice);
        setpersona({
            ...persona,
            cursos: cursosActualizados
        });
    };

    const handleInputChange = (campo, valor) => {
        setpersona({ ...persona, [campo]: valor });
        if (error[campo]) {
            setError({ ...error, [campo]: "" });
        }
    };

    const continuar = (e) => {
        e.preventDefault();
        
        if (validarForm()) {
            alert("Los datos fueron ingresados correctamente");
            if (siguiente) {
                siguiente();
            }
        }
    };

    return (
        <div className="formulario">
            <form onSubmit={continuar} noValidate>
                <h2>Datos académicos</h2>

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
                        onChange={(e) => handleInputChange("institucion", e.target.value)}/>
                </div>
                {error.institucion && <span className="error-texto">{error.institucion}</span>}

                <div className="grupo">
                    <label>Título Obtenido</label>
                    <input type="text" placeholder="Ingrese el titulo" className="input"
                        value={persona.titulo}
                        onChange={(e) => handleInputChange("titulo", e.target.value)}/>
                </div>
                {error.titulo && <span className="error-texto">{error.titulo}</span>}

                <div className="grupo">
                    <label>Año de Graduación</label>
                    <input type="number" placeholder="2025" className="input"
                        value={persona.anio}
                        onChange={(e) => handleInputChange("anio", e.target.value)}/>
                </div>
                {error.anio && <span className="error-texto">{error.anio}</span>}
                
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
                {error.cursos && <span className="error-texto">{error.cursos}</span>}

                {/* Lista de cursos */}
                <div className="lista-cursos">
                    {persona.cursos.map((curso, indice) => (
                        <div className="grupo" key={indice}>
                            <div className="curso">
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
                    ))}
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

export default FormularioAcademico;
