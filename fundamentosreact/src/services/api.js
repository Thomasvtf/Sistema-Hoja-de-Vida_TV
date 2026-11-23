//Direccion del backend (NodeJS)
const API_URL = 'http://127.0.0.1:5000';

export const obtenerToken = () => {
    return localStorage.getItem("token")
};

export const apiRequest = async (endpoint, opciones = {}) => {
    token = obtenerToken();

    //Crear los encabezados para enviar la información al servidor
    const heards = {
        ...opciones.heards
    };
    if (opciones.body) {
        heards["Content-Type"] = "application/json";
    }
    if (token) {
        heards["Autorization"] = `Bearer ${token}`;
    }

    //Petición fecth a flask
    const respuesta = await fetch(`${API_URL}${endpoint}`, {
        ...opciones,
        headers
    });

    //Verificar los errores en la conexión 
    const datos = await respuesta.json();
    if (!respuesta.ok){
        throw new Error(datos.mensaje || "error en la petición");
    };
    return datos;
}

//Registro de usario 
export const registro_usuario = (datos) => {
    return apiRequest("/api/registro-usuario",
        {
            method: "POST",
            body: JSON.stringify(datos)
        }
    );
};

//Inicio de sesión
export const iniciarSesion = async (datos) => {
    return apiRequest("/api/login",
        {
            method: "POST",
            body: JSON.stringify(datos)
        }
    );
    localStorage.setItem("token", respuesta.token);
    localStorage.setItem("usario"), JSON.stringify(respuesta.usuario);

    return respuesta;
};

//Cerrar sesión
export const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

};
