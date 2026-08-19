import { useState } from "react";
import Modal from "./Modal";

function FormularioExperiencia({ persona, setpersona, anterior, siguiente }) {
    // Controlar el Modal
    const [modalAbierto, setModalAbierto] = useState(false);

    // Estados para los campos temporales del modal
    const [empresa, setEmpresa] = useState("");
    const [cargo, setCargo] = useState("");
    const [experiencia, setExperiencia] = useState("");
    const [funciones, setFunciones] = useState("");
    const [habilidadesLocal, setHabilidadesLocal] = useState("");

    // Estados de error separados para el formulario general y para el modal
    const [errorGeneral, setErrorGeneral] = useState("");
    const [errorModal, setErrorModal] = useState({});

    // Guardar toda la experiencia laboral desde el Modal
    const guardarExperienciaTotal = (e) => {
        e.preventDefault();
        
        const erroresNuevosModal = {};

        // 1. VALIDACIONES AGREGADAS EN REACT PARA TODOS LOS CAMPOS DEL MODAL
        if (!empresa.trim()) {
            erroresNuevosModal.empresa = "El nombre de la empresa es obligatorio.";
        }
        if (!cargo.trim()) {
            erroresNuevosModal.cargo = "El cargo desempeñado es obligatorio.";
        }
        if (!experiencia.trim()) {
            erroresNuevosModal.experiencia = "El tiempo de experiencia es obligatorio (Ej: 1 año).";
        }
        if (!funciones.trim()) {
            erroresNuevosModal.funciones = "Las funciones desempeñadas son obligatorias.";
        }
        if (!habilidadesLocal.trim()) {
            erroresNuevosModal.habilidades = "Debe ingresar al menos una habilidad técnica.";
        }

        // Si hay algún error, guardamos el estado y frenamos el registro
        if (Object.keys(erroresNuevosModal).length > 0) {
            setErrorModal(erroresNuevosModal);
            return; 
        }

        // Objeto de experiencia laboral válido
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
                ...(persona.experiencias || []),
                nuevaExperiencia
            ]
        });

        // Limpieza de campos del modal
        setEmpresa("");
        setCargo("");
        setExperiencia("");
        setFunciones("");
        setHabilidadesLocal("");
        setErrorModal({}); 
        setErrorGeneral("");

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

    // Control del botón siguiente (Formulario General)
    const continuar = (e) => {
        e.preventDefault();
        
        if ((persona.experiencias || []).length === 0) {
            setErrorGeneral("Por favor agregue al menos una experiencia laboral antes de continuar.");
            return;
        }

        setErrorGeneral("");
        alert("Registro completado correctamente");
        if (siguiente) {
            siguiente();
        }
    };

    // 2. FUNCIONES AUXILIARES PARA LIMPIAR ERRORES EN TIEMPO REAL AL ESCRIBIR
    const handleInputChangeModal = (campo, valor, setCampoState) => {
        setCampoState(valor);
        if (errorModal[campo]) {
            setErrorModal({ ...errorModal, [campo]: "" });
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
     
            {/* Modal */}
            <Modal 
                isOpen={modalAbierto} 
                onClose={() => {
                    setModalAbierto(false);
                    setErrorModal({}); 
                }} 
                titulo="Registrar Experiencia"
            >
                <form onSubmit={guardarExperienciaTotal} noValidate>
                    <div className="grupo">
                        <label>Empresa</label>
                        <input 
                            type="text" 
                            placeholder="Nombre de la empresa" 
                            className="input"
                            value={empresa}
                            onChange={(e) => handleInputChangeModal("empresa", e.target.value, setEmpresa)}
                        />
                    </div>
                    {errorModal.empresa && <span className="error-texto">{errorModal.empresa}</span>}

                    <div className="grupo">
                        <label>Cargo</label>
                        <input 
                            type="text" 
                            placeholder="Cargo desempeñado" 
                            className="input"
                            value={cargo} 
                            onChange={(e) => handleInputChangeModal("cargo", e.target.value, setCargo)}
                        />
                    </div>
                    {errorModal.cargo && <span className="error-texto">{errorModal.cargo}</span>}

                    <div className="grupo">
                        <label>Tiempo de Experiencia</label>
                        <input 
                            type="text" 
                            placeholder="Ej: 1 año" 
                            className="input"
                            value={experiencia}
                            onChange={(e) => handleInputChangeModal("experiencia", e.target.value, setExperiencia)}
                        />
                    </div>
                    {/* Error de Tiempo de Experiencia */}
                    {errorModal.experiencia && <span className="error-texto">{errorModal.experiencia}</span>}

                    <div className="grupo">
                        <label>Funciones Desempeñadas</label>
                        <textarea  
                            placeholder="Describa las funciones realizadas." 
                            className="input"
                            value={funciones}
                            onChange={(e) => handleInputChangeModal("funciones", e.target.value, setFunciones)}
                        ></textarea>
                    </div>
                    {/* Error de Funciones */}
                    {errorModal.funciones && <span className="error-texto">{errorModal.funciones}</span>}

                    <div className="grupo">
                        <label>Habilidades Técnicas</label>
                        <input  
                            placeholder="HTML, CSS, JavaScript..." 
                            className="input"
                            value={habilidadesLocal}
                            onChange={(e) => handleInputChangeModal("habilidades", e.target.value, setHabilidadesLocal)}
                        />
                    </div>
                    {/* Error de Habilidades */}
                    {errorModal.habilidades && <span className="error-texto">{errorModal.habilidades}</span>}

                    <div className="botones" style={{ marginTop: "15px" }}>
                        <button className="button" type="submit">Agregar Experiencia</button>
                    </div>
                </form>
            </Modal>

            {/* Lista de experiencias */}
            <div className="lista-experiencias" style={{ marginTop: "20px" }}>
                {(persona.experiencias || []).map((exp, indice) => (
                    <div key={indice} className="tarjeta-experiencia" style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", marginBottom: "15px", position: "relative" }}>
                        <h3>{exp.cargo} en <strong>{exp.empresa}</strong></h3>
                        <p><strong>Tiempo:</strong> {exp.tiempo}</p>
                        <p><strong>Funciones:</strong> {exp.funciones}</p>
                        <p><strong>Habilidades:</strong> {exp.habilidades}</p>
                        
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

            {errorGeneral && <span className="error-texto" style={{ textAlign: "center", marginBottom: "15px" }}>{errorGeneral}</span>}

            <form onSubmit={continuar} noValidate>
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
