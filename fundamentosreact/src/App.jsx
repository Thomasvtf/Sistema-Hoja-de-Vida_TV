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
  })

  //Conectar reat con flask
  const guardar_hoja_vida = async() => {
    try{

      const datosapi = {
        nombre:persona.nombre,
        edad:persona.edad,
        ciudad:persona.ciudad,
        correo:persona.correo,
        fotografia:persona.fotografia,
        programa:persona.programa,
        ficha:persona.ficha,
        jornada:persona.jornada
      };

      const respuesta = await fetch(
        "http://127.0.0.1:5000/api/registro-hoja-vida",
        {
          methods: "POST",
          headers:{"Content-Type":"application/json"},

          body: JSON.stringify(datos_api)
        }
      );

      const resultado = await respuesta.json();

      console.log("Respuesta realizada", resultado);


    }catch(error){
      console.error("error al conectar con flask",error);
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
                guardar_hoja_Vida = {guardar_hoja_vida}
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
