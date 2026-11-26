import { useState } from "react";
import { iniciarSesion } from "../services/api"

function NavigatorLogin({ onlogin }) {
    //Estado del formulario
    const [correo, setcorreo] = useState("");
    const [password, setpassword] = useState("");

    //Estado para controlar los procesos
    const [eror, setError] = useState("");
    const [cargando, setCargando] = useState(false);

    //Función para iniciar sesión

    const manejarLogin = async (e) => {
        //Evitar que el formulario recargue la página
        e.preventDefault();
        setError("")
        setCargar(true)

        try {
            //Enviar los datos a flask (api)
            const respuesta = await iniciarSesion({
                correo: correo.trim().toLowerCase(),
                password: password
            });
            oulogin(respuesta.usuario);
        } catch (error) {
            setError(error.mensaje)
        } finally {
            setCargando(false)
        };
    };
    return (
        <div className="login-container">
            <h2></h2>
            <form action="">
                <label htmlFor="">Correo electronico</label>
                <input type="email" value="" onChange={(e) => setcorreo(e.target.value)} required />
                <label htmlFor="">Contraseña</label>
                <input type="password" value="" onChange={(e) => setpassword(e.target.value)} required />
                <button type="submit" disabled={cargando} >{cargando ? "Validando..." : "Ingrasar"}</button>
            </form>
        </div>
    );
}