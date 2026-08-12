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

    //Datos academicos
    foto:null,
    nombre: "",
    edad: "",
    ciudad: "",
    correo: "",
    programa: "",
    ficha: "",
    jornada: "Mañana",

    //Datos de estudios
    nivel: "Bachiller",
    institucion: "",
    titulo: "",
    anio: "",
    cursos: [],

    //Datos de experiencia
    empresa: "",
    cargo: "",
    experiencia: "",
    funciones: "",
    habilidades: [],


  })

  return (
    <>
  <div className="interfaz-global">
      <Header />

      <main className="seccion-principal">
        <div className="contenedor">
          {
            paso == 1 && (
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