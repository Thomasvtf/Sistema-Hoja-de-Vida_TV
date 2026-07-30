function Formulario() {
    return (
        <div className="formulario">
            <form>
                <h2>Registro de Aprendices</h2>

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