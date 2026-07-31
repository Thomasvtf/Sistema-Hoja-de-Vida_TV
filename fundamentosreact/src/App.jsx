import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header'
import Formulario from './components/formulario'
import Footer from './components/footer' 
import FormularioAcademico from './components/formularioAcademico' 
import FormularioExperiencia from './components/formularioExperiencia' 


function App() {

  const [paso, setPaso] = useState(1);

  return (
    <>
  <div className="interfaz-global">
      <Header />

      <main className="seccion-principal">
        <div className="contenedor">
          {
            paso == 1 && (
            <Formulario siguiente = {() => setPaso(2)}/>
          )}
          
          {paso === 2 && (
              <FormularioAcademico 
                anterior ={() => setPaso(1)} 
                siguiente ={() => setPaso(3)} 
              />

            )}
          
          {paso === 3 && (
              <FormularioExperiencia 
                anterior ={() => setPaso(2)}
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