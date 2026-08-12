import { useState } from "react"
function FormularioExperiencia({ persona, setpersona, anterior, siguiente }){
    /*const [empresa, setEmpresa] = useState("") 
    const [cargo, setCargo] = useState("")
    const [experiencia, setExperiencia] = useState("")
    const [Funciones, setFunciones] = useState("")
    const [habilidades, setHabilidades] = useState("")*/
    
    const [nuevaHabilidad,setNuevaHabilidad] = useState("");

    //Agregar curso
    const agregarHabilidad = () => {

        if (nuevaHabilidad.trim() === "") { //Metodo .trimm() borra los espacios vacíos al principio y al final de un texto

            alert("Ingrese el nombre del curso: ");
            
            return;

        }
        
        setpersona ({
            ...persona,
            habilidades: [ 
                ...persona.habilidades,
                nuevaHabilidad
            ]

        });

            // Limpiar el campo
            setNuevaHabilidad("");
    };
    
    //eliminar curso
    const eliminarHabilidad = (indice) => {

        const habilidadesActualizadas = persona.habilidades.filter(
            (_, i) => i !== indice
        );

        setpersona({
            ...persona,
            habilidades: habilidadesActualizadas
        })
    };

    const continuar = (e) => {
        e.preventDefault();
        alert("Registro completado correctamente")
        if (siguiente){
            siguiente();
        }
    }

    return (
        <div className="formulario">
            <form onSubmit={continuar}>
                <h2>Datos</h2>

                <div className="grupo">
                    <label>Empresa</label>
                    <input type="text" placeholder="Nombre de la empresa" className="input"
                    value={persona.empresa}
                    onChange={(e) => setpersona({...persona, empresa: e.target.value})}
                    />
                </div>
                <div className="grupo">
                    <label>Cargo</label>
                    <input type="text" placeholder="Cargo desempeñado" className="input"
                        value={persona.cargo}
                        onChange={(e) => setpersona({...persona, cargo: e.target.value})}/>
                </div>
                <div className="grupo">
                    <label>Tiempo de Experiencia</label>
                    <input type="text" placeholder="1 año" className="input"
                        value={persona.experiencia}
                        onChange={(e) => setpersona({...persona, experiencia: e.target.value})}/>
                </div>
                <div className="grupo">
                    <label>Funciones Desempeñadas</label>
                    <textarea  placeholder="Describa las funciones realizadas." className="input"
                        value={persona.funciones}
                        onChange={(e) => setpersona({...persona, funciones: e.target.value})}></textarea>
                </div>
                <div className="grupo">
                    <label>Habilidades Tecnicas</label>
                    <input  placeholder="HTML, CSS, JavaScrit..." className="input"
                         value={nuevaHabilidad}
                            onChange={(e) => setNuevaHabilidad(e.target.value)}/>
                        
                            <button className="boton-curso" type="button" onClick={agregarHabilidad}>+</button>
                </div>
                {/*lista de habilidades*/}

                <div className="lista-cursos">
                    {
                        persona.habilidades.map(
                            (habilidades, indice) => (
                            <div className="grupo">
                                <div 
                                    className="curso"
                                    key = {indice}
                                >
                
                                        {habilidades}
                                    

                                </div>
                                <div className="boton-eliminar">
                                    <button
                                        type="button" className="eliminar"
                                        onClick={() => eliminarHabilidad(indice)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                            )
                        )
                    }
                </div>

                <div  className="botones">
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

export default FormularioExperiencia