import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header'
import Formulario from './components/formulario'
import Footer from './components/footer'


function App() {

  return (
    <>
  <div className="interfaz-global">
      <Header />
      
      {/* El main o contenedor intermedio crecerá para empujar el footer */}
      <main className="seccion-principal">
        <div className="contenedor">
          <Formulario />
        </div>
      </main>
      
      <Footer />
    </div>
    </>
  )
}

export default App
