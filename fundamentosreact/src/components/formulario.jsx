    import { useState } from "react"
function Formulario({ siguiente }) {
    const [foto, setFoto] = useState(null)
    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [correo, setCorreo] = useState("")
    const [programa, setPrograma] = useState("")
    const [ficha, setFicha] = useState("")
    const [jornada, setJornada] = useState("Mañana")

    //Función botón continuar
    const continuar = (e) =>{

        e.preventDefault();
        alert ("Los datos fueron ingresados correctamente");
        if (siguiente){
            siguiente();
        }
    }

    return (
        <div className="formulario">
            <form onSubmit = {continuar}>
                <h2>Datos Personales</h2>

                <div className="grupo">
                    <label>Fotografía</label>
                    <input type="file" accept="image/*"/>
                </div>
                <div className="grupo">
                    <label>Nombre completo</label>
                    <input type="text" placeholder="Ingrese su nombre completo"/>
                </div>
                <div className="grupo">
                    <label>Edad</label>
                    <input type="number" placeholder="Ingrese su edad"/>
                </div>
                <div className="grupo">
                    <label>Ciudad</label>
                    <input type="text" placeholder="Ingrese su ciudad"/>
                </div>
                <div className="grupo">
                    <label>Programa de formación</label>
                    <input type="text" placeholder="Ejemplo: ADSO"/>
                </div>
                <div className="grupo">
                    <label>Correo electronico</label>
                    <input type="email" placeholder="correo@ejemplo.com"/>
                </div>
                <div className="grupo">
                    <label>Número de ficha</label>
                    <input type="number" placeholder="Ingrese su número de ficha"/>
                </div>
                <div className="grupo">
                    <label>Jornada</label>
                    <select name="jornada" id="jornada">
                        <option value="mañana">Mañana</option>
                        <option value="tarde">Tarde</option>
                        <option value="noche">Noche</option>
                        <option value="mixta">Mixta</option>
                    </select>
                </div>
                <div className="boton">
                    <button  type="submit">Continuar registro</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario