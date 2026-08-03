import { useState } from "react"
function FormularioExperiencia({ anterior }){
    /*const [empresa, setEmpresa] = useState("") 
    const [cargo, setCargo] = useState("")
    const [experiencia, setExperiencia] = useState("")
    const [Funciones, setFunciones] = useState("")
    const [habilidades, setHabilidades] = useState("")*/
    
    const continuar = (e) => {
        e.preventDefault();
        alert("Registro completado correctamente")
    }

    return (
        <div className="formulario">
            <form onSubmit={continuar}>
                <h2>Datos</h2>

                <div className="grupo">
                    <label>Empresa</label>
                    <input type="text" placeholder="Nombre de la empresa"/>
                </div>
                <div className="grupo">
                    <label>Cargo</label>
                    <input type="text" placeholder="Cargo desempeñado"/>
                </div>
                <div className="grupo">
                    <label>Tiempo de Experiencia</label>
                    <input type="number" placeholder="1 año"/>
                </div>
                <div className="grupo">
                    <label>Funciones Desempeñadas</label>
                    <textarea  placeholder="Describa las funciones realizadas."></textarea>
                </div>
                <div className="grupo">
                    <label>Habilidades Tecnicas</label>
                    <textarea  placeholder="HTML, CSS, JavaScrit..."></textarea>
                </div>
                <div className="boton">
                    <button  type="button" onClick={anterior}>Anterior</button>
                </div>
                <div className="boton">
                    <button  type="submit">Registrar</button>
                </div>
            </form>
        </div>
    )    
}

export default FormularioExperiencia