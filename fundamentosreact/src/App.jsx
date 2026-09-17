import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header'
import Formulario from './components/formulario'
import Footer from './components/footer' 
import FormularioAcademico from './components/formularioAcademico' 
import FormularioExperiencia from './components/formularioExperiencia' 
import Vista from './components/vista'

function App() {

  const [idHojaVida, setIdHojaVida] = useState(null);
  const [idExp, setIdExp] = useState(null);

  const [paso, setPaso] = useState(1);

  const [persona, setPersona] = useState ({
    // Datos personales
    foto: null,
    nombre: "",
    edad: "",
    ciudad: "",
    correo: "",
    programa: "",
    ficha: "",
    jornada: "Mañana",

    // Datos de estudios
    nivel: "Bachiller",
    institucion: "",
    titulo: "",
    anio: "",
    cursos: [],

    //Experiencia
    experiencias: [], 
    habilidades: [],
  })

  //Conectar reat con flask
  // Conectar react con flask
  const confirmar_registro = async() => {
    try {
      const datos_hoja = {
        nombre: persona.nombre,
        edad: persona.edad,
        ciudad: persona.ciudad,
        correo: persona.correo,
        fotografia: persona.foto,
        programa: persona.programa,
        ficha: persona.ficha,
        jornada: persona.jornada
      };

      const respHoja = await fetch(
        "http://127.0.0.1:5000/api/registro-hoja-vida",
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(datos_hoja)
        }
      );

      if (!respHoja.ok) {
        const errorHoja = await respHoja.json();
        alert("Error al guardar los datos personales: " + errorHoja.Mensaje);
        return;
      }

      const resultadoHoja = await respHoja.json();

      // Buscamos el ID ya sea que se llame 'id' o 'id_generado' o 'id_hoja_vida'
      const idReal = resultadoHoja.id; 
      console.log("ID detectado y rescatado en React:", idReal);

      // Si después de buscar en todas las opciones sigue sin existir, detenemos el proceso
      if (!idReal) {
        alert("El servidor registró la hoja de vida, pero no pudimos recuperar el ID numérico. Revisa la consola del navegador.");
        return;
      }

      // Actualizamos el estado para que quede guardado en el componente
      setIdHojaVida(idReal); 

      const datos_estudios = {
        nivel: persona.nivel,
        institucion: persona.institucion,
        titulo: persona.titulo,
        anio_graduacion: persona.anio,
        id_hoja_vida: idReal 
      };

      // Enviamos la petición de estudios usando la URL dinámica correcta
      const respEstudios = await fetch(`http://127.0.0.1:5000/api/registro-estudios/${idReal}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(datos_estudios)
      });

      if (respEstudios.ok) {
        const resultadoEstudios = await respEstudios.json();
        console.log("Estudios guardados exitosamente:", resultadoEstudios);
        alert("¡Registro completado con éxito! Hoja de vida y estudios vinculados.");
      } else {
        const errorEstudios = await respEstudios.json();
        console.log("Error detallado de estudios:", errorEstudios);
        alert("Se creó la hoja de vida, pero hubo un error al guardar los estudios asociados.");
      }

      //Guardar cursos
      const lista_cursos = persona.cursos.map(curso =>{
        if (typeof curso === 'object' && curso !== null){
          return curso.nombre || "";
        }
        return curso;
      }).filter(Boolean);

      const datos_cursos = {
        cursos:lista_cursos,
        id_hoja_vida: idReal
      } 

      const respCursos = await fetch(`http://127.0.0.1:5000/api/registro-curso/${idReal}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(datos_cursos)
      });

      if (respCursos.ok) {
        const resultadoCursos = await respCursos.json();
        console.log("Cursos guardados exitosamente:", resultadoCursos);
      } else {
        const errorCursos = await respCursos.json();
        console.log("Error detallado de cursos:", errorCursos);
        alert("Se creó la hoja de vida, pero hubo un error al guardar los cursos asociados.");
      }

      const datos_experiencias = {
          hoja_vida_id: idReal,
          experiencias:persona.experiencias,
      };

      const respExperiencias = await fetch (`http://127.0.0.1:5000/api/registro-experiencia/${idReal}`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(datos_experiencias)
      });

      if (!respExperiencias.ok) {
        const errorExperiencias = await respExperiencias.json();
        console.log("Error detallado experiencias:", errorExperiencias)
        alert("Se creó la hoja de vida, pero hubo un error al guardar las experiencias asociadas.");
      }

      
      const resultadoExperiencias = await respExperiencias.json();
      

      const idEx = resultadoExperiencias.id;
      console.log("ID detectado y rescatado en React:", idEx);


      if (!idEx) {
        alert("El servidor registró la experiencia, pero no pudimos recuperar el ID numérico. Revisa la consola del navegador.");
        return;
      }

      setIdExp(idEx);


      const datos_habilidades = {
        experiencias_id: idEx,
        habilidades:persona.habilidades,
      };

      const respHabilidades = await fetch(`http://127.0.0.1:5000/api/registro-habilidad/${idEx}`,{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datos_habilidades)
      });

      if (respHabilidades.ok){
        const resultadoHabilidades = await respHabilidades.json();
        console.log("Habiliddades guardadas exitosamente", resultadoHabilidades)
      } else{
        const errorHabilidades = await respHabilidades.json();
        console.log("Error detallado habilidades:", errorHabilidades)
        alert("Se creó la experiencia, pero hubo un error al guardar las habilidades asociadas.")
      }

    } catch(error) {
      console.error("Error crítico al conectar con Flask:", error);
      alert("Hubo un error de red al intentar conectar con el servidor.");
    }
  };



  return (
    <>
      <div className="interfaz-global">
        <Header />

        <main className="seccion-principal">
          <div className="contenedor">
            {paso === 1 && (
                <Formulario 
                  persona = {persona}
                  setpersona = {setPersona}
                  siguiente = {() => setPaso(2)}
                />
            )}
            
            {paso === 2 && (
                <FormularioAcademico 
                  persona = {persona}
                  setpersona = {setPersona}
                  anterior ={() => setPaso(1)} 
                  siguiente ={() => setPaso(3)} 
                />
            )}
            
            {paso === 3 && (
                <FormularioExperiencia 
                  persona = {persona}
                  setpersona = {setPersona}
                  anterior ={() => setPaso(2)}
                  siguiente ={() => setPaso(4)}
                />
            )}

            {paso === 4 && (
              <Vista
                persona = {persona}
                confirmar_registro = {confirmar_registro}
                anterior ={() => setPaso(3)}
              />
            )}
          </div>
        </main>
       
        <Footer />
      </div>
    </>
  )
}

export default App
