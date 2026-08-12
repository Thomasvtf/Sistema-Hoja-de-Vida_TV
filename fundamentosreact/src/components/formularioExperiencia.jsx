import { useState } from "react";
import Modal from "./Modal"; // Asegúrate de ajustar la ruta de tu componente Modal

function FormularioExperiencia({ persona, setpersona, anterior, siguiente }) {
    //controlar el Modal
    const [modalAbierto, setModalAbierto] = useState(false);

    const [empresa, setEmpresa] = useState("");
    const [cargo, setCargo] = useState("");
    const [experiencia, setExperiencia] = useState("");
    const [funciones, setFunciones] = useState("");
    const [habilidadesLocal, setHabilidadesLocal] = useState(""); // Guarda el texto temporal de habilidades

    //guardar toda la experiencia
    const guardarExperienciaTotal = (e) => {
        e.preventDefault(); // Previene que el formulario del modal recargue la página

        if (empresa.trim() === "" || cargo.trim() === "") {
            alert("Por favor ingrese al menos la Empresa y el Cargo.");
            return;
        }

        //objeto de experiencia laboral
        const nuevaExperiencia = {
            empresa: empresa.trim(),
            cargo: cargo.trim(),
            tiempo: experiencia.trim(),
            funciones: funciones.trim(),
            habilidades: habilidadesLocal.trim() 
        };

        setpersona({
            ...persona,
            experiencias: [
                ...(persona.experiences || persona.experiencias || []),
                nuevaExperiencia
            ]
        });

        setEmpresa("");
        setCargo("");
        setExperiencia("");
        setFunciones("");
        setHabilidadesLocal("");

        // Cerrar el modal
        setModalAbierto(false);
    };

    // Eliminar experiencia 
    const eliminarExperiencia = (indice) => {
        const experienciasActualizadas = (persona.experiencias || []).filter(
            (_, i) => i !== indice
        );

        setpersona({
            ...persona,
            experiencias: experienciasActualizadas
        });
    };

    const continuar = (e) => {
        e.preventDefault();
        if ((persona.experiencias || []).length === 0) {
            alert("Por favor agregue al menos una experiencia laboral antes de continuar.");
            return;
        }
        alert("Registro completado correctamente");
        if (siguiente) {
            siguiente();
        }
    };

    return (
        <div className="formulario">
            <h2>Experiencia Laboral</h2>
                <div className="botones">
                    <button 
                        type="button" 
                        className="button" 
                        onClick={() => setModalAbierto(true)}
                    >
                        + Añadir Experiencia Laboral
                    </button>
                </div>
     
            {/*Modal*/}
            <Modal 
                isOpen={modalAbierto} 
                onClose={() => setModalAbierto(false)} 
                titulo="Registrar Experiencia"
            >
                <form onSubmit={guardarExperienciaTotal}>
                    <div className="grupo">
                        <label>Empresa</label>
                        <input 
                            type="text" 
                            placeholder="Nombre de la empresa" 
                            className="input"
                            value={empresa}
                            onChange={(e) => setEmpresa(e.target.value)}
                        />
                    </div>
                    <div className="grupo">
                        <label>Cargo</label>
                        <input 
                            type="text" 
                            placeholder="Cargo desempeñado" 
                            className="input"
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                        />
                    </div>
                    <div className="grupo">
                        <label>Tiempo de Experiencia</label>
                        <input 
                            type="text" 
                            placeholder="Ej: 1 año" 
                            className="input"
                            value={experiencia}
                            onChange={(e) => setExperiencia(e.target.value)}
                        />
                    </div>
                    <div className="grupo">
                        <label>Funciones Desempeñadas</label>
                        <textarea  
                            placeholder="Describa las funciones realizadas." 
                            className="input"
                            value={funciones}
                            onChange={(e) => setFunciones(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="grupo">
                        <label>Habilidades Técnicas</label>
                        <input  
                            placeholder="HTML, CSS, JavaScript..." 
                            className="input"
                            value={habilidadesLocal}
                            onChange={(e) => setHabilidadesLocal(e.target.value)}
                        />
                    </div>

                    <div className="botones">
                        <button className="button" type="submit">Agregar Experiencia</button>
                    </div>
                </form>
            </Modal>

            {/* Lista de experiencias */}
            <div className="lista-experiencias">
                {(persona.experiencias || []).map((exp, indice) => (
                    <div key={indice} className="tarjeta-experiencia" style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", marginBottom: "15px", position: "relative" }}>
                        <h3>{exp.cargo} en <strong>{exp.empresa}</strong></h3>
                        <p><strong>Tiempo:</strong> {exp.tiempo || "No especificado"}</p>
                        <p><strong>Funciones:</strong> {exp.funciones || "No especificadas"}</p>
                        <p><strong>Habilidades:</strong> {exp.habilidades || "No especificadas"}</p>
                        
                        <div className="boton-eliminar" style={{ marginTop: "10px" }}>
                            <button
                                type="button" 
                                className="eliminar"
                                onClick={() => eliminarExperiencia(indice)}
                            >
                                Eliminar experiencia
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={continuar}>
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
    );
}

export default FormularioExperiencia;
