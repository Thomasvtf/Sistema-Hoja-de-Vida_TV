import { useState } from "react"

function Formulario({ persona, setpersona, siguiente }) {

    const [error, setError] = useState({});
    
    const validarForm = () => {
        const errorNuevo = {};

        if (!persona.nombre.trim()) {
            errorNuevo.nombre = "El nombre completo es obligatorio.";
        }else if (persona.nombre.trim().length < 3) {
            errorNuevo.nombre = "El nombre debe tener al menos 3 caracteres.";
        }

         if (!persona.edad) {
            errorNuevo.edad = "La edad es obligatoria.";
        } else if (Number(persona.edad) < 16 || Number(persona.edad) > 100) {
            errorNuevo.edad = "Debes ingresar una edad válida (16 - 100 años).";
        }

        if (!persona.ciudad.trim()) {
            errorNuevo.ciudad = "La ciudad es obligatoria.";
        }

        if (!persona.programa.trim()) {
            errorNuevo.programa = "El programa de formación es obligatorio.";
        }

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!persona.correo) {
            errorNuevo.correo = "El correo electrónico es obligatorio.";
        } else if (!regexCorreo.test(persona.correo)) {
            errorNuevo.correo = "El formato de correo no es válido.";
        }

        if (!persona.ficha) {
            errorNuevo.ficha = "El número de ficha es obligatorio.";
        }

        setError(errorNuevo);

        return Object.keys(errorNuevo).length === 0;
    }

    //Función botón continuar
    const continuar = (e) =>{

        e.preventDefault();
        
        if (validarForm()){
            alert ("Los datos fueron ingresados correctamente");
            if (siguiente){
                siguiente();
            }
        }
    }

    const handleInputChange = (campo, valor) => {
        setpersona({ ...persona, [campo]: valor });
        if (error[campo]) {
            setError({ ...error, [campo]: "" });
        }
    };

    return (
        <div className="formulario">
            <form onSubmit = {continuar} noValidate>
                <h2>Datos Personales</h2>

                <div className="grupo">
                    <label>Fotografía</label>
                    <input type="file" accept="image/*" className="input"
                    onChange={(e) => {
                        const archivo = e.target.files[0];
                        if (archivo) {
                            setpersona({...persona,foto: URL.createObjectURL(archivo)});
                        }
                    }}
                />
                </div>

                <div className="grupo">
                    <label>Nombre completo</label> 
                    <input type="text" placeholder="Ingrese su nombre completo" className="input"
                    value = {persona.nombre}
                    onChange={(e) => handleInputChange("nombre", e.target.value)}/>
                </div>
                {error.nombre && (
                    <span className= "error-texto">
                        {error.nombre}
                    </span>
                )}

                <div className="grupo">
                    <label>Edad</label>
                    <input type="number" placeholder="Ingrese su edad" className="input"
                    value = {persona.edad}
                    onChange={(e) => handleInputChange("edad", e.target.value)}/>
                </div>
                {error.edad && (
                    <span className= "error-texto">
                        {error.edad}
                    </span>
                )}
                
                <div className="grupo">
                    <label>Ciudad</label>
                    <input type="text" placeholder="Ingrese su ciudad" className="input"
                    value = {persona.ciudad}
                    onChange={(e) => handleInputChange("ciudad", e.target.value)}/>
                </div>
                {error.ciudad && (
                    <span  className= "error-texto">
                        {error.ciudad}
                    </span>
                )}

                <div className="grupo">
                    <label>Programa de formación</label>
                    <input type="text" placeholder="Ejemplo: ADSO" className="input"
                    value = {persona.programa}
                    onChange={(e) => handleInputChange("programa", e.target.value)}/>
                </div>
                {error.programa && (
                    <span  className= "error-texto">
                        {error.programa}
                    </span>
                )}

                <div className="grupo">
                    <label>Correo electronico</label>
                    <input type="email" placeholder="correo@ejemplo.com" className="input"
                    value = {persona.correo}
                    onChange={(e) => handleInputChange("correo", e.target.value)}/>
                </div>
                {error.correo && (
                    <span  className= "error-texto">
                        {error.correo}
                    </span>
                )}

                <div className="grupo">
                    <label>Número de ficha</label>
                    <input type="number" placeholder="Ingrese su número de ficha" className="input"
                    value = {persona.ficha}
                    onChange={(e) => handleInputChange("ficha", e.target.value)}/>
                </div>
                {error.ficha && (
                    <span  className= "error-texto">
                        {error.ficha}
                    </span>
                )}

                <div className="grupo">
                    <label>Jornada</label>
                    <select name="jornada" id="jornada" className="input"
                        value={persona.jornada}
                        onChange={(e) => setpersona({...persona, jornada: e.target.value})}>
                        <option value="mañana">Mañana</option>
                        <option value="tarde">Tarde</option>
                        <option value="noche">Noche</option>
                        <option value="mixta">Mixta</option>
                    </select>
                </div>

                <div className="boton">
                    <button className="button" type="submit">Continuar registro</button>
                </div>
            </form>
        </div>

        
    )
}

export default Formulario